import {MongoDb} from "../config/database_mongo";
import Promise from "bluebird";

class BaseModel {
    async findOne(query,options = null){
        options = options || {};
        let db = await MongoDb();
        let collection = Promise.promisifyAll(db.collection(this.collection_name));

        return collection.findOne(query,options);
    }

    async search(search_str, options = null) {
        if (search_str === undefined || search_str === '')
            return Promise.reject({message:'Search key is empty'});

        let db = await MongoDb();
        let collection = Promise.promisifyAll(db.collection(this.collection_name));

        /**
         * Text index search
         */
        let query = {
            "$text": {
                "$search": search_str
            }
        };

        options = options || {};

        let collection_cursor = this.pagination(collection.find(query),options);
        collection_cursor = this.sort(collection_cursor,options);

        let data_cursor = Promise.promisifyAll(collection_cursor);

        return data_cursor.toArray();
    }

    async findBy(projection, options = null) {
        let db = await MongoDb();
        let collection = Promise.promisifyAll(db.collection(this.collection_name));

        options = options || {};

        let collection_cursor = this.pagination(collection.find(projection),options);
        collection_cursor = this.sort(collection_cursor,options);

        let data_cursor = Promise.promisifyAll(collection_cursor);

        return data_cursor.toArray();
    }

    async findAll(options = null){
        let db = await MongoDb();
        let collection = Promise.promisifyAll(db.collection(this.collection_name));

        options = options || {};

        let collection_cursor = this.sort(collection.find({}),options);
        let data_cursor = Promise.promisifyAll(collection_cursor);

        return data_cursor.toArray();
    }

    pagination(collection_cursor,options) {
        let page = options.page || 1;
        let per_page = options.per_page || 20;
        let skip = (page - 1 ) * per_page;

        return collection_cursor.limit(parseInt(per_page)).skip(skip);
    }

    sort(collection_cursor,options) {
        // Default sorting order as ascending
        options.sort_order = options.sort_order || 'ASC';

        if (options.sort === undefined || (options.sort_order !== 'ASC' && options.sort_order !== 'DESC'))
            return collection_cursor;

        let sort_query = {};

        sort_query[options.sort] = (options.sort_order === 'ASC') ? 1 : -1;

        console.log(sort_query);

        return collection_cursor.sort(sort_query);
    }
}

export {BaseModel};