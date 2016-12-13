import {DefaultController} from './DefaultController.js';
import {BeersModel} from '../models/Beers.js';

class BeersController extends DefaultController{
    async single(ctx){
        try {
            let beersModel = new BeersModel();

            ctx.body = await beersModel.findOne({id: ctx.params.id});
        } catch(err) {
            ctx.body = {message: err.message};
            ctx.status = err.status || 500;
        }
    }

    async category(ctx){
        try{
            let beersModel = new BeersModel();
            ctx.body = await beersModel.findByCategory(ctx.params.category_id);
        } catch(err) {
            ctx.body = { message: err.message };
            ctx.status = err.status || 500;
        }
    }

    async style(ctx){
        try{
            let beersModel = new BeersModel();
            let options = ctx.request.query;

            ctx.body = await beersModel.findByStyle(ctx.params.style_id,options);
        } catch(err) {
            ctx.body = { message: err.message };
            ctx.status = err.status || 500;
        }
    }

    async brewery(ctx){
        try{
            let beersModel = new BeersModel();
            ctx.body = await beersModel.findByBrewery(ctx.params.brewery_id);
        } catch(err) {
            ctx.body = { message : err.message};
            ctx.status = err.status || 500;
        }
    }
}

export {BeersController};