const common = require('./common/index');
const object = require('./object/index');
const string = require('./string/index');
const array = require('./array/index');
const date = require('./date/index');
const util = {common, object, string, array, date};
module.exports = util;
