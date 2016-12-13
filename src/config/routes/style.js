/*
 * Setting up routes
 * */
import Router from 'koa-router';
import {StyleController} from "../../controllers/StyleController.js";


let route__styles = new Router();

route__styles.get('/:id', (ctx, next) => {
    let style_controller = new StyleController(ctx,next);

    style_controller.single();
});

route__styles.get('/categories/:id', (ctx, next) => {
    let style_controller = new StyleController(ctx,next);

    style_controller.category();
});

export default route__styles;