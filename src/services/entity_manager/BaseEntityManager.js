import Promise from 'bluebird';

class BaseEntityManager {
  constructor(mongo_service, cache_service) {
    this.mongoService = mongo_service;
    this.cacheService = cache_service;
  }

  async findOne(query, options = null) {
    try {
      const cache_key = this.getCacheKey(this.collection_name, {
        query: query,
        ...options
      });

      let cached_results = await this.getCachedResults(cache_key);

      if (!cached_results) {
        cached_results = await this.mongoService.findOne(this.collection_name, query, options);
        await this.writeCachedResults(cache_key, cached_results);
      } else {
        cached_results = JSON.parse(cached_results);
      }

      return Promise.resolve(cached_results);
    } catch (e) {
      // If there is error with the process using the cache
      // always try to return data from mongo
      return this.mongoService.findOne(this.collection_name, query, options);
    }
  }

  async search(search_str, projections = null, options = null) {
    try{
      const cache_key = this.getCacheKey(this.collection_name, {
        search_str: search_str,
        ...projections,
        ...options,
      });

      let cached_results = await this.getCachedResults(cache_key);

      if (!cached_results) {
        cached_results = await this.mongoService.search(this.collection_name, search_str, projections, options);
        this.writeCachedResults(cache_key, cached_results);
      } else {
        cached_results = JSON.parse(cached_results);
      }

      return Promise.resolve(cached_results);
    } catch(e) {
      // If there is error with the process using the cache
      // always try to return data from mongo
      return this.mongoService.search(this.collection_name, search_str, projections, options);
    }
  }

  async findBy(projection, options = null) {
    try {
      const cache_key = this.getCacheKey(this.collection_name, {
        projection: projection,
        ...options
      });

      let cached_results = await this.getCachedResults(cache_key);

      if (!cached_results) {
        cached_results = await this.mongoService.findBy(this.collection_name, projection, options);
        await this.writeCachedResults(cache_key, cached_results);
      } else {
        cached_results = JSON.parse(cached_results);
      }

      return Promise.resolve(cached_results);
    } catch (er) {
      // If there is error with the process using the cache
      // always try to return data from mongo
      return this.mongoService.findBy(this.collection_name, projection, options);
    }
  }

  async findAll(options = null) {
    return this.findBy({}, options);
  }

  async getCachedResults(key) {
    if (this.cacheService === undefined) throw 'Cache Service not setup';

    return this.cacheService.getAsync(key);
  }

  async writeCachedResults(key, data) {
    if (this.cacheService === undefined) throw 'Cache Service not setup';

    return this.cacheService.setAsync(key, JSON.stringify(data));
  }

  getCacheKey($collection_name, $query_options) {
    return `${$collection_name}_${JSON.stringify($query_options)}`;
  }
}

export default BaseEntityManager;