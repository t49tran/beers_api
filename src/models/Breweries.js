import {BaseModel} from '../core/BaseModel.js';

class BreweriesModel extends BaseModel{
    constructor(){
        super();
        this.collection_name = 'breweries';
    }

    async findByCountry(country_id,options){
        if(country_id === undefined || country_id === '')
            return Promise.reject({err: 'country id not found or is empty'});

        let projection = {
            'country': country_id
        };

        return this.findBy(projection,options);
    }
}

export {BreweriesModel};