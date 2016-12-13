import {DefaultController} from './DefaultController.js';
import {BeersModel} from '../models/Beers.js';

class SearchController extends DefaultController{
    async beers(ctx,next){
        try{
            let beers_model = new BeersModel();
            let options = {};
            options.page = ctx.request.query.page;
            options.per_page  = ctx.request.query.per_page;

            ctx.body = await beers_model.search(ctx.request.query.key,options);
        } catch (err) {
            ctx.body = {
                message : err.message
            };
            ctx.status = err.status || 500;
        }
    }
}

export {SearchController};