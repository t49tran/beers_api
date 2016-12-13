import 'babel-polyfill';
import 'babel-register';

import Koa from 'koa';
import koaJson from 'koa-json';
import routes from './src/config/routes.js';

console.log(routes);

var app = new Koa();
app.use(koaJson());

app.use(routes.routes())
    .use(routes.allowedMethods());

app.listen(3003);