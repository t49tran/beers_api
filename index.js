import 'babel-polyfill';
import 'babel-register';

import Koa from 'koa';
import koaJson from 'koa-json';
import cors from 'kcors';
import mongo from 'koa-mongo';
import redis from './src/services/cache';
import mongoService from './src/services/mongo';
import entityManager from './src/services/entity_manager';

import config from './src/config';

import routes from './src/services/routes';

var app = new Koa();
app.use(koaJson());
app.use(cors());
app.use(mongo(config.database.mongo));
app.use(redis(config.cache.redis));
app.use(mongoService());
app.use(entityManager());

app.use(routes.routes())
    .use(routes.allowedMethods());

app.listen(3005);