const common = require('./common/index');
const object = require('./object/index');
const string = require('./string/index');
const array = require('./array/index');
const date = require('./date/index');
const data = require('./data/index');
const util = {common, object, string, array, date, data};
module.exports = util;
