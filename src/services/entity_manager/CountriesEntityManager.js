import BaseEntityManager from './BaseEntityManager';

class CountriesEntityManager extends BaseEntityManager {
  constructor(mongoConnection, redisClient) {
    super(mongoConnection, redisClient);
    this.collection_name = 'countries';
  }
}

export default CountriesEntityManager;