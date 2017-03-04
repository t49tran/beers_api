import _ from 'lodash';

class StyleController {
  async single(ctx) {
    try {
      ctx.body = await ctx.styles_manager.findOne({id: parseInt(ctx.params.id)});
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = 500 || err.status;
    }
  }

  async categories(ctx) {
    try {
      let options = ctx.request.query;

      ctx.body = await ctx.styles_manager.findByCategory(ctx.params.category_id, options);
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = 500 || err.status;
    }
  }

  async all(ctx) {
    try {
      let options = _.isEmpty(ctx.request.query) ? {
        sort_order: 'ASC',
        sort: 'name'
      } : ctx.request.query;

      ctx.body = await ctx.styles_manager.findAll(options);
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = 500 || err.status;
    }
  }
}

export {StyleController};