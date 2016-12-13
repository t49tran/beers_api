import {BaseModel} from '../core/BaseModel.js';
import Promise from 'bluebird';

class BeersModel extends BaseModel{
    constructor(){
        super();
        this.collection_name = 'beers';
    }

    async findByCategory(category_id){
        if(category_id === undefined || category_id === '')
            return Promise.reject({err:'category id not found or is empty'});

        return Promise.resolve({beer:'123123 testing'});
    }

    async findByStyle(style_id,options){
        if(style_id === undefined || style_id === '')
            return Promise.reject({err: 'style id not found or is empty'});

        console.log(options);

        let projection = {
            'style.id': parseInt(style_id)
        };

        return this.findBy(projection,options);
    }

}

export {BeersModel};