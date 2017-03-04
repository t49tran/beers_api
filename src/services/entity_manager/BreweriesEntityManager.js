import BaseEntityManager from './BaseEntityManager';

class BreweriesEntityManager extends BaseEntityManager {
  constructor(mongoConnection, redisClient) {
    super(mongoConnection, redisClient);
    this.collection_name = 'breweries';
  }

  async findByCountry(country_id, options) {
    if (country_id === undefined || country_id === '')
      return Promise.reject({err: 'country id not found or is empty'});

    let projection = {
      'country': country_id
    };

    return this.findBy(projection, options);
  }
}

export default BreweriesEntityManager;