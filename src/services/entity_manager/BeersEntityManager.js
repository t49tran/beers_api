import Promise from 'bluebird';
import BaseEntityManager from './BaseEntityManager';

class BeersEntityManager extends BaseEntityManager {
    constructor(mongoService, redisService) {
        super(mongoService, redisService);
        this.collection_name = 'beers';
    }

    async findByCategory(category_id, options) {
        if(category_id === undefined || category_id === '')
            return Promise.reject({err:'category id not found or is empty'});

        let projection = {
            'style.categoryId': parseInt(category_id)
        };

        return this.findBy(projection, options);
    }

    async findByStyle(style_id,options) {
        if(style_id === undefined || style_id === '')
            return Promise.reject({err: 'style id not found or is empty'});

        let projection = {
            'style.id': parseInt(style_id)
        };

        return this.findBy(projection, options);
    }

    async findByBrewery(brewery_id,options) {
        if(brewery_id === undefined || brewery_id === '') {
            return Promise.reject({err: 'brewery id not found or is empty'});
        }

        let projection = {
            'brewery.id' : brewery_id
        };

        return this.findBy(projection, options);
    }

    async findByCountry(country_code, options) {
        if(country_code === undefined || country_code === ''){
            return Promise.reject({err: 'country code not found or is empty'});
        }

        let projection = {
            country: country_code
        };

        return this.findBy(projection, options);
    }
}

export default BeersEntityManager;