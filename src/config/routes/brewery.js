import Router from 'koa-router';
import {BreweryController} from '../../controllers/BreweryController.js';

var route__brewery = new Router();
var brewery_controller = new BreweryController;

route__brewery.get('/:id',brewery_controller.single);
route__brewery.get('/country/:country_id',brewery_controller.by_country);

export default route__brewery;