import {BaseController} from '../core/BaseController.js';
import {CategoriesModel} from '../models/Categories.js';
import _ from 'lodash';

class CategoryController extends BaseController{
    constructor(){
        super();
    }

    async single(ctx){
        try{
            let categories_model = new CategoriesModel();
            ctx.body = categories_model.findOne({id:parseInt(ctx.params.id)});
        } catch(err){
            ctx.body.message = err.message || err;
            ctx.status = err.status || 500;
        }
    }

    async all(ctx){
        try{
            let categories_model = new CategoriesModel();
            let options = _.isEmpty(ctx.request.query) ? {
                sort_order: 'ASC',
                sort: 'name'
            } : ctx.request.query;

            ctx.body = await categories_model.findAll(options);
        } catch(err){
            ctx.body = {message: err.message || err};
            ctx.status = err.status || 500;
        }
    }
}

export {CategoryController};