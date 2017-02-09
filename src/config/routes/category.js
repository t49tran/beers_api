/*
 * Setting up routes
 * */
import Router from 'koa-router';
import {CategoryController} from '../../controllers/CategoryController';

let route__categories = new Router();
let category_controller = new CategoryController();

route__categories.get('/all', category_controller.all);
route__categories.get('/:id', category_controller.single);

export default route__categories;