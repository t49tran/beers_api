import Router from 'koa-router';
import {CountriesController} from '../../controllers/CountriesController';

const route__countries = new Router();
let countries_controller = new CountriesController();

route__countries.get('/all',countries_controller.all);

export default route__countries;