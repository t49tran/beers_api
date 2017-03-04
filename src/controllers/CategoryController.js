import _ from 'lodash';

class CategoryController {
  async single(ctx) {
    try {
      ctx.body = await ctx.categories_manager.findOne({id: parseInt(ctx.params.id)});
    } catch (err) {
      ctx.body.message = err.message || err;
      ctx.status = err.status || 500;
    }
  }

  async all(ctx) {
    try {
      let options = _.isEmpty(ctx.request.query) ? {
        sort_order: 'ASC',
        sort: 'name'
      } : ctx.request.query;

      ctx.body = await ctx.categories_manager.findAll(options);
    } catch (err) {
      ctx.body = {message: err.message || err};
      ctx.status = err.status || 500;
    }
  }
}

export {CategoryController};