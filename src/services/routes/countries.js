import Router from 'koa-router';
import CountriesController from '../../controllers/CountriesController';

const route_countries = new Router();
const countries_controller = new CountriesController();

route_countries.get('/all', countries_controller.all);

export default route_countries;