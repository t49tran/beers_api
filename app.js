'use strict';

require('babel-polyfill');

require('babel-register');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaJson = require('koa-json');

var _koaJson2 = _interopRequireDefault(_koaJson);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _koaMongo = require('koa-mongo');

var _koaMongo2 = _interopRequireDefault(_koaMongo);

var _cache = require('./src/services/cache');

var _cache2 = _interopRequireDefault(_cache);

var _mongo = require('./src/services/mongo');

var _mongo2 = _interopRequireDefault(_mongo);

var _entity_manager = require('./src/services/entity_manager');

var _entity_manager2 = _interopRequireDefault(_entity_manager);

var _config = require('./src/config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./src/services/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
app.use((0, _koaJson2.default)());
app.use((0, _kcors2.default)());
app.use((0, _koaMongo2.default)(_config2.default.database.mongo));
//app.use(redis(config.cache.redis));
app.use((0, _mongo2.default)());
app.use((0, _entity_manager2.default)());

app.use(_routes2.default.routes()).use(_routes2.default.allowedMethods());

app.listen(3005);
