import {BaseController} from '../core/BaseController.js';
import {BreweriesModel} from '../models/Breweries.js';

class BreweryController extends BaseController {
    async single(ctx){
        try{
            let breweries_model = new BreweriesModel();
            let brewery = await breweries_model.findOne({id:ctx.params.id});
            if(brewery === undefined || brewery == null){
                ctx.body = {
                    message: 'Brewery not found',
                    success: false
                };
                return;
            }
            ctx.body = brewery;
        }catch(err){
            ctx.body = { message: err.message || err };
            ctx.status = err.status || 500;
        }
    }

    async by_country(ctx){
        try{
            let breweries_model = new BreweriesModel();
            let options = ctx.request.query;
            let breweries = await breweries_model.findByCountry(ctx.params.country_id,options);

            if(breweries === undefined || breweries == null){
                ctx.body = {
                    message: 'Breweries not found',
                    success: false
                };
                return;
            }
            ctx.body = breweries;
            return;
        } catch (err) {
            console.log(err);
        }
    }
}

export {BreweryController};