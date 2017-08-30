import Promise from 'bluebird';
import _ from 'lodash';

class CountriesController {
  async all(ctx) {
    try {
      ctx.body = await ctx.countries_manager.findAll({
        sort_order: 'ASC',
        sort: 'name',
      });
    } catch(err) {
      ctx.body = {message:err.message};
      ctx.status = err.status || 500;
    }
  }
}

export default CountriesController;