import Promise from 'bluebird';
import _ from 'lodash';

var MongoClient = require('mongodb').MongoClient;
Promise.promisifyAll(MongoClient);

class MongoService {
  constructor(mongo_connection) {
    this.mongoConnection = mongo_connection;
  }

  /**
   * @param collection_name
   * @param search_str
   * @param options
   * @param projection
   * @returns {*}
   *
   * Search function, a specific implementation of general findBy function with a search_str
   */
  async search(collection_name, search_str, projection = null, options = null) {
    if (collection_name === '' || collection_name === 'undefined')
      return Promise.reject({'message': 'No collection defined'});

    projection = _.assign({}, {
      '$text': {
        '$search': search_str
      }
    }, projection);

    return this.findBy(collection_name, projection, options);
  }

  async findOne(collection_name, projection) {
    if (collection_name === '' || collection_name === 'undefined') {
      return Promise.reject({'message': 'No collection defined'});
    }
    console.log(this.mongoConnection.collection(collection_name).findOne(projection));
    return this.mongoConnection.collection(collection_name).findOne(projection);
  }

  async findBy(collection_name, projection, options = null) {
    options = options || {};

    if (collection_name === '' || collection_name === 'undefined') {
      return Promise.reject({'message': 'No collection defined'});
    }

    const collection = this.mongoConnection.collection(collection_name);

    let collection_cursor = this.pagination(collection.find(projection), options);
    collection_cursor = this.sort(collection_cursor, options);

    return collection_cursor.toArray();
  }

  sort(collection_cursor, options) {

    // Default sorting order as ascending
    options.sort_order = options.sort_order || 'ASC';

    if (options.sort === undefined || (options.sort_order !== 'ASC' && options.sort_order !== 'DESC'))
      return collection_cursor;

    let sort_query = {};

    sort_query[options.sort] = (options.sort_order === 'ASC') ? 1 : -1;

    return collection_cursor.sort(sort_query);
  }

  pagination(collection_cursor, options) {

    const page = options.page || 1;
    const per_page = options.per_page || 20;
    const skip = (page - 1) * per_page;

    return collection_cursor.limit(parseInt(per_page)).skip(skip);
  }
}

export default MongoService;