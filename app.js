'use strict';

require('babel-polyfill');

require('babel-register');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaJson = require('koa-json');

var _koaJson2 = _interopRequireDefault(_koaJson);

var _routes = require('./src/config/routes.js');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_routes2.default);

var app = new _koa2.default();
app.use((0, _koaJson2.default)());

app.use(_routes2.default.routes()).use(_routes2.default.allowedMethods());

app.listen(3003);
