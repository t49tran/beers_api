/*
 * Setting up routes
 * */
import Router from 'koa-router';
import {SearchController} from '../../controllers/SearchController.js';

var route__search = new Router();
var search_controller = new SearchController;

route__search.get('/beers', search_controller.beers);
route__search.get('/styles', search_controller.styles);
route__search.get('/categories', search_controller.categories);
route__search.get('/breweries', search_controller.breweries);

export default route__search;