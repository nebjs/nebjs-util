const common = require('./common');
const object = require('./object/index');
const string = require('./string/index');
const array = require('./array/index');
const util = {common, object, string, array};
module.exports = util;
