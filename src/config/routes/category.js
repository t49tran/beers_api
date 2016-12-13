/*
 * Setting up routes
 * */
import Router from 'koa-router';
import {CategoryController} from '../../controllers/CategoryController';

let route__categories = new Router();

route__categories.get('/:id', (ctx, next) => {
    let category_controller = new CategoryController(ctx,next);

    category_controller.single();
});

export default route__categories;