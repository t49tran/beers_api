import {BaseController} from '../core/BaseController.js';
import {StylesModel} from '../models/Styles.js';
import _ from 'lodash';

class StyleController extends BaseController{
    async single(ctx){
        try {
            let styles_model = new StylesModel();
            ctx.body = await styles_model.findOne({id: parseInt(ctx.params.id)});
        } catch(err) {
            ctx.body = {message: err.message};
            ctx.status = 500 || err.status;
        }
    }

    async categories(ctx){
        try {
            let styles_model = new StylesModel();
            let options = ctx.request.query;

            ctx.body = await styles_model.findByCategory(ctx.params.category_id,options);
        } catch(err) {
            ctx.body = {message: err.message};
            ctx.status = 500 || err.status;
        }
    }

    async all(ctx){
        try {
            let options = _.isEmpty(ctx.request.query) ? {
                sort_order: 'ASC',
                sort: 'name'
            } : ctx.request.query;

            let styles_model = new StylesModel();

            ctx.body = await styles_model.findAll(options);
        } catch(err) {
            ctx.body = { message: err.message};
            ctx.status = 500 || err.status;
        }
    }
}

export {StyleController};