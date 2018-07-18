# common
The util.common has common methods, using example

## Contents
- [Demo](#Demo)
- [Api](#Api)

<span id="Demo"></span>
### Demo
```javascript
const util = require('nebjs-util');
// Clone
util.common.clone({a: {b: "c"}, b: ["a"]});
// console.log: { a: { b: 'c' }, b: [ 'a' ] }

// Equivalent to verify
util.common.equal(1, 2);
// console.log: false
util.common.equal(2, 2);
// console.log: true
util.common.equal('abc', 'ab');
// console.log: false
util.common.equal('abc', 'abc');
// console.log: true
util.common.equal(['abc'], ['abc', 'abc']);
// console.log: false
util.common.equal(['abc'], ['abc']);
// console.log: true
const x = {a: {b: "c"}, b: ["a"]}, y = {a: {b: "c"}, b: ["a"]}, z = {a: {b: "c"}, b: ["a", "b"]};
util.common.equal(x, y);
// console.log: true
x === y;
// console.log: false
util.common.equal(x, z);
// console.log: false
```

<span id="Api"></span>
### Api
#### util.common.clone(src)
This method used to clone objects in depth
- @param src {*} target common
- @return a copy of the src

#### util.common.equal(x, y)
This method used to comparing two objects with equal values
- @param x {*}
- @param y {*}
- @return whether x and y are equal in depth

