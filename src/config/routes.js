/*
 * Setting up routes
 * */
import Router from 'koa-router';
import route__search from './routes/search.js';
import route__beers from './routes/beers.js';
import route__styles from './routes/style.js';
import route__categories from './routes/category.js';

var route__api = new Router({
    prefix: '/api'
});

route__api.use("/search",route__search.routes(),route__search.allowedMethods());
route__api.use("/beers",route__beers.routes(),route__beers.allowedMethods());
route__api.use("/styles",route__styles.routes(),route__styles.allowedMethods());
route__api.use("/categories",route__categories.routes(),route__categories.allowedMethods());

export default route__api;