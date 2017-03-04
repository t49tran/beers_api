import Promise from 'bluebird';
import BaseEntityManager from './BaseEntityManager';

class StylesEntityManager extends BaseEntityManager {
  constructor(mongoService, redisService) {
    super(mongoService, redisService);
    this.collection_name = 'styles';
  }

  async findByCategory(category_id, options) {
    if (category_id === undefined || category_id === '')
      Promise.reject({
        error: 'category id not found or is empty',
      });

    let projections = {
      categoryId: parseInt(category_id)
    };

    return this.findBy(projections, options);
  }
}

export default StylesEntityManager;