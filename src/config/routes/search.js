/*
 * Setting up routes
 * */
import Router from 'koa-router';
import {SearchController} from '../../controllers/SearchController.js';

var route__search = new Router();
var search_controller = new SearchController;

route__search.get('/beers', search_controller.beers);

export default route__search;