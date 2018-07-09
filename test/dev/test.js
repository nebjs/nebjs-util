const util = require('../../lib/index');

// console.log(util.array.copy(['a'], 'a', {unique: true}).toString());
// console.log(util.array.copy(['a'], ['a', 'b', 'c'], {unique: true, multi: true}).toString());
console.log(util.array.copy(["a", "b", "c"], "0", {index: 0}).toString());
