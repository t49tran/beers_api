import _ from "lodash";

class BreweryController {
  async all(ctx) {
    try {
      const options = _.isEmpty(ctx.request.query) ? {
        sort_order: 'ASC',
        sort: 'name'
      } : ctx.request.query;

      const breweries = await ctx.breweries_manager.findAll(options);
      if (breweries === undefined || breweries == null) {
        ctx.body = {
          message: 'No breweries found',
          success: false
        };
        return;
      }
      ctx.body = breweries;
    } catch (err) {
      ctx.body = {message: err.message || err};
      ctx.status = err.status || 500;
    }
  }

  async single(ctx) {
    try {
      let brewery = await ctx.breweries_manager.findOne({id: ctx.params.id});
      if (brewery === undefined || brewery == null) {
        ctx.body = {
          message: 'Brewery not found',
          success: false
        };
        return;
      }
      ctx.body = brewery;
    } catch (err) {
      ctx.body = {message: err.message || err};
      ctx.status = err.status || 500;
    }
  }

  async by_country(ctx) {
    try {
      let options = ctx.request.query;
      let breweries = await ctx.breweries_manager.findByCountry(ctx.params.country_id, options);

      if (breweries === undefined || breweries == null) {
        ctx.body = {
          message: 'Breweries not found',
          success: false
        };
        return;
      }
      ctx.body = breweries;
    } catch (err) {
      console.log(err);
    }
  }
}

export {BreweryController};