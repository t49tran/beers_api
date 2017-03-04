/*
 * Setting up routes
 * */
import Router from 'koa-router';
import route__search from './search.js';
import route__beers from './beers.js';
import route__styles from './style.js';
import route__categories from './category.js';
import route__breweries from './brewery.js';
import route__countries from './countries.js';

var route__api = new Router({
    prefix: '/api'
});

route__api.use("/search",route__search.routes(),route__search.allowedMethods());
route__api.use("/beers",route__beers.routes(),route__beers.allowedMethods());
route__api.use("/styles",route__styles.routes(),route__styles.allowedMethods());
route__api.use("/categories",route__categories.routes(),route__categories.allowedMethods());
route__api.use("/breweries",route__breweries.routes(),route__breweries.allowedMethods());
route__api.use("/countries",route__countries.routes(),route__countries.allowedMethods());
route__api.use('beers/:id', async function (ctx, next) {
    return next().then(function () {
        console.log('Middleware done');
    });
});

export default route__api;