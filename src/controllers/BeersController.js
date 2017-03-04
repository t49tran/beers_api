class BeersController {
  async single(ctx, next) {
    try {
      let beer = await ctx.beers_manager.findOne(ctx.params.id);
      ctx.body = beer;
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = err.status || 500;
    }
  }

  async category(ctx) {
    try {
      let options = ctx.request.query;
      ctx.body = await ctx.beers_manager.findByCategory(ctx.params.category_id, options);
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = err.status || 500;
    }
  }

  async style(ctx) {
    try {
      let options = ctx.request.query;
      ctx.body = await ctx.beers_manager.findByStyle(ctx.params.style_id, options);
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = err.status || 500;
    }
  }

  async brewery(ctx) {
    try {
      let options = ctx.request.query;
      ctx.body = await ctx.beers_manager.findByBrewery(ctx.params.brewery_id, options);
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = err.status || 500;
    }
  }

  async country(ctx) {
    try {
      let options = ctx.request.query;
      ctx.body = await ctx.beers_manager.findByCountry(ctx.params.country_code, options);
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = err.status || 500;
    }
  }
}

export {BeersController};