# array
The util.array has array to manipulate Array objects, using example

## Contents
- [Demo](#Demo)
- [Api](#Api)

<span id="Demo"></span>
### Demo
```javascript
const util = require('nebjs-util');
// copy an element/array into an array
util.array.copy(['a'], 'a', {unique: true});
// console.log: [ 'a' ]
util.array.copy(['a'], ['a', 'b', 'c'], {unique: true, multi: true});
// console.log: [ 'a', 'b', 'c' ]
util.array.copy(["a", "b", "c"], "0", {index: 0});
// console.log: [ '0', 'a', 'b', 'c' ]
util.array.copy(["a", "b", "c"], [0, 1, 2], {index: 0, multi: true});
// console.log: [ 0, 1, 2, 'a', 'b', 'c' ]
util.array.copy(['a'], ['a', 'b', 'c'], {unique: true, multi: true});
// console.log: [ 'a', 'b', 'c' ]
```

<span id="Api"></span>
### Api
#### util.array.copy(array, element, option)
This method can be used to copy an element/array into an array
- @param array {Array} target array
- @param element {*} element|elements
- @param option {Object}
  - deep {Boolean} Deep copy, default false
    The number of levels of deep copy is close to infinity
    Note: when a deep copy is used, there must be no circular references in the deep copy object, otherwise you will be stuck with an infinite downward copy until the resource is exhausted
  - index {Number} Non-negative integer that specifies the location of the insert, which is at the end when not specified and at 0
  - multi {Boolean} Batch copy, false by default, and when true, an element is an array of multiple elements to import
  - unique {Boolean} Uniqueness constraint, default false, when true, existing elements will not be copied
  - filter {Function} filter：Function(array, elements, element, index)，Filter out unqualified elements (priority below deep configuration), and this of the filter points to the current source element
    - The return value of false or other non-true objects means that the corresponding element is filtered out
    - When the return value is true, it means that the corresponding element is inserted directly
    - The return value is {value:??} is used to insert values corresponding to value, which can be used for special processing, such as reinserting a complex copy of a deep copy
- @return target array
