/*
 * Setting up routes
 * */
import Router from 'koa-router';
import {StyleController} from "../../controllers/StyleController.js";

let route__styles = new Router();

let style_controller = new StyleController;

route__styles.get('/all',style_controller.all);

route__styles.get('/categories/:category_id', style_controller.categories);

route__styles.get('/:id', style_controller.single);

export default route__styles;