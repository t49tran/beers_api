/*
 * Setting up routes
 * */
import Router from 'koa-router';
import {BeersController} from '../../controllers/BeersController.js';

let route__beers = new Router();
let beers_controller = new BeersController;

route__beers.get('/:id',beers_controller.single);

route__beers.get('/style/:style_id',beers_controller.style);

route__beers.get('/category/:category_id', beers_controller.category);

route__beers.get('/brewery/:brewery_id', beers_controller.brewery);

export default route__beers;