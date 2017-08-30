/*
 * Setting up routes
 * */
import Router from 'koa-router';
import BeersController from '../../controllers/BeersController.js';

const route_beers = new Router();
const beers_controller = new BeersController();

route_beers.get('/:id', beers_controller.single);

route_beers.get('/style/:style_id', beers_controller.style);

route_beers.get('/category/:category_id', beers_controller.category);

route_beers.get('/brewery/:brewery_id', beers_controller.brewery);

route_beers.get('/country/:country_code', beers_controller.country);

export default route_beers;