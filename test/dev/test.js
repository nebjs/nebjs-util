const util = require('../../lib/index');

/*console.log(util.array.copy(['a'], 'a', {unique: true}));
console.log(util.array.copy(['a'], ['a', 'b', 'c'], {unique: true, multi: true}));
console.log(util.array.copy(["a", "b", "c"], "0", {index: 0}));
console.log(util.array.copy(["a", "b", "c"], [0, 1, 2], {index: 0, multi: true}));
console.log(util.array.copy(['a'], ['a', 'b', 'c'], {unique: true, multi: true}));*/


// console.log(util.object.copy({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {deep: true}));
console.log(util.common.equal(1, 2));
console.log(util.common.equal(2, 2));
console.log(util.common.equal('abc', 'abc'));
console.log(util.common.equal('abc', 'ab'));
console.log(util.common.equal(['abc'], ['abc']));
console.log(util.common.equal(['abc'], ['abc', 'abc']));

const a = {a: {b: "c"}, b: ["a"]}, b = util.common.clone(a);
console.log(a);
console.log(b);
console.log(a === b);

const x = {a: {b: "c"}, b: ["a"]}, y = {a: {b: "c"}, b: ["a"]}, z = {a: {b: "c"}, b: ["a", "b"]};
console.log(util.common.equal(x, y));
console.log(x === y);
console.log(util.common.equal(x, z));

