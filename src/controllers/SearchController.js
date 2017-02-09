import {BaseController} from '../core/BaseController.js';
import {BeersModel} from '../models/Beers.js';
import {StylesModel} from '../models/Styles.js';
import {CategoriesModel} from '../models/Categories.js';
import {BreweriesModel} from '../models/Breweries.js';

class SearchController extends BaseController{
    async beers(ctx){
        try{
            let beers_model = new BeersModel();
            let options = ctx.request.query;

            ctx.body = await beers_model.search(ctx.request.query.key,options);
        } catch (err) {
            ctx.body = {
                message : err.message
            };
            ctx.status = err.status || 500;
        }
    }

    async styles(ctx){
        try {
            let styles_model = new StylesModel();
            let options = ctx.request.query;

            ctx.body = await styles_model.search(ctx.request.query.key,options);
        } catch (err) {
            ctx.body = {
                message: err.message
            };
            ctx.status = err.status || 500;
        }
    }

    async categories(ctx){
        try {
            let categories_model = new CategoriesModel();
            let options = ctx.request.query;

            ctx.body = await categories_model.search(ctx.request.query.key,options);
        } catch (err) {
            ctx.body = {
                message : err.message
            };
            ctx.status = err.status || 500;
        }
    }

    async breweries(ctx){
        try {
            let breweries_model = new BreweriesModel();
            let options = ctx.request.query;

            ctx.body = await breweries_model.search(ctx.request.query.key,options);
        } catch (err) {
            ctx.body = {
                message : err.message
            };
            ctx.status = err.status || 500;
        }
    }
}

export {SearchController};