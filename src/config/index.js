var fs   = require('fs');
var yaml = require('js-yaml');

const APP_CONFIG = yaml.safeLoad(fs.readFileSync(__dirname+"/parameters.yml"));

export default APP_CONFIG;