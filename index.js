import 'babel-polyfill';
import 'babel-register';

import Koa from 'koa';
import koaJson from 'koa-json';
import cors from 'kcors';

import routes from './src/config/routes.js';

var app = new Koa();
app.use(koaJson());
app.use(cors());

app.use(routes.routes())
    .use(routes.allowedMethods());

app.listen(3003);