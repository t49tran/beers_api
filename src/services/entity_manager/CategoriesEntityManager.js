import BaseEntityManager from './BaseEntityManager';

class CategoriesEntityManager extends BaseEntityManager {
  constructor(mongoService, redisService) {
    super(mongoService, redisService);
    this.collection_name = 'categories';
  }
}

export default CategoriesEntityManager;