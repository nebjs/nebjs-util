const util = require('../../lib/index');

console.log(util.array.copy(['a'], 'a', {unique: true}));
console.log(util.array.copy(['a'], ['a', 'b', 'c'], {unique: true, multi: true}));
console.log(util.array.copy(["a", "b", "c"], "0", {index: 0}));
console.log(util.array.copy(["a", "b", "c"], [0, 1, 2], {index: 0, multi: true}));
console.log(util.array.copy(['a'], ['a', 'b', 'c'], {unique: true, multi: true}));
