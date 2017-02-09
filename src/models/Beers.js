import Promise from 'bluebird';
import _ from 'lodash';
import {BaseModel} from '../core/BaseModel.js';
import {MongoDb} from "../config/database_mongo";

class BeersModel extends BaseModel {
    constructor(){
        super();
        this.collection_name = 'beers';
    }

    async findByCategory(category_id,options) {
        if(category_id === undefined || category_id === '')
            return Promise.reject({err:'category id not found or is empty'});

        let projection = {
            'style.categoryId': parseInt(category_id)
        };

        return this.findBy(projection,options);
    }

    async findByStyle(style_id,options) {
        if(style_id === undefined || style_id === '')
            return Promise.reject({err: 'style id not found or is empty'});

        let projection = {
            'style.id': parseInt(style_id)
        };

        return this.findBy(projection,options);
    }

    async findByBrewery(brewery_id,options) {
        if(brewery_id === undefined || brewery_id === '')
            return Promise.reject({err: 'brewery id not found or is empty'});

        let projection = {
            'brewery.id' : brewery_id
        };

        return this.findBy(projection,options);
    }

    async search(search_str, options) {
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

        if(options.style && !isNaN(options.style)){
            query = _.extend(query,{
                'style.id': parseInt(options.style)
            })
        }

        if(options.cat && !isNaN(options.cat)){
            query = _.extend(query,{
                'style.categoryId': parseInt(options.cat)
            })
        }

        options = options || {};

        let collection_cursor = this.pagination(collection.find(query),options);
        collection_cursor = this.sort(collection_cursor,options);

        let data_cursor = Promise.promisifyAll(collection_cursor);

        return data_cursor.toArray();
    }
}

export {BeersModel};