# object
The util.object has methods for manipulating object type objects, using examples

## Contents
- [Demo](#Demo)
- [Api](#Api)

<span id="demo"></span>
### Demo
```javascript
const util = require('nebjs-util');
// Clears all properties of the object
util.object.clear({a: 123, b: 456});
// console.log: {}

// Stack new objects
util.object.copy({}, {a: 123, b: 456});
// console.log: {a: 123, b: 456}

// Stack to object
util.object.copy({a: 123, b: 456}, {c: 789, d: "abc"});
// console.log: {a: 123, b: 456, c: 789, d: "abc"}

// Delete to object
util.object.copy({a: 123, b: 456}, {c: 789, d: "abc"}, {omit: ["c"]});
// console.log: {a: 123, b: 456, d: "abc"}

// Filter to object
util.object.copy({a: 123, b: 456}, {c: 789, d: "abc"}, {filter(key, src, target){return key!=="c";}});
// console.log: {a: 123, b: 456, d: "abc"}

// Alias to object
util.object.copy({a: 123, b: 456}, {c: 789, d: "abc"}, {filter(key, src, target){return key==="c"?"aliasC":false;}});
// console.log: {a: 123, b: 456, aliasC: 789}

// Overlay mode copies objects deeply
util.object.copy(copy({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]});
// console.log: {a: {b: "c", d: "e"}, b: ["a", "b"]}

// Merge mode copies objects deeply
util.object.copy(copy({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {mergeObject: false, mergeArray: false});
// console.log: {a: {d: "e"}, b: ["b"]}

// Unoperated object
util.object.pick({}, {a: 123, b: 456}, ['a']);
// console.log: {}

// Select to object
util.object.pick({a: 123, b: 456}, {c: 789, d: "abc"}, {pick: ["c"]});
// console.log: {a: 123, b: 456, c: 789}

// Filter to object
util.object.pick({a: 123, b: 456}, {c: 789, d: "abc"}, {
   pick: ["c"], filter(key/*, src, target*/) {
     return key !== "c";
   }
 });
// console.log: {a: 123, b: 456}

// Alias to object
util.object.pick({a: 123, b: 456}, {c: 789, d: "abc"}, {
    pick: ["c"], filter(key/*, src, target*/) {
      return key === "c" ? "aliasC" : false;
    }
  });
// console.log: {a: 123, b: 456, aliasC: 789}

// Overlay mode copies objects deeply
util.object.pick({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {pick: ["a", "b"]});
// console.log: {a: {b: "c", d: "e"}, b: ["a", "b"]}

// Merge mode copies objects deeply
util.object.pick({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {pick: ["a", "b"], mergeObject: false, mergeArray: false});
// console.log: {a: {d: "e"}, b: ["b"]}
```

<span id="api"></span>
### Api
#### util.object.clear(obj)
This method clears all the properties of the object
- @param obj {Object} clears target
- @return clears target like {}

#### util.object.copy(to, from, option = {})
This method can copy one object to another object in depth. You can specify that you only copy properties that satisfy the condition, and you can specify an alias for the attribute
- @param to {Object} target
- @param from {Object} source
- @param option {Object}
  - omit {String|Array|Function} : The properties to be deleted will no longer trigger the subsequent filters
  - filter {Function} Filter: {Function(key, SRC, target)}, filter out unqualified attributes (lowest priority), and this of the filter points to the source object src
    - The return value of false is filtered out..
    - When the return value is non-false, the data is not filtered and the return value is a non-null string, the return value is referred to as the [target object property name] (rename copy).
  - mergeObject {Boolean} Merge objects, the default is true
  - mergeArray {Boolean} Merge arrays, the default is true
- @return target object

#### util.object.pick(to, from, option = {})
This method can copy one object to another object in depth. You can specify that you only copy properties that satisfy the condition, and you can specify an alias for the attribute
- @param to {Object} target
- @param from {Object} source
- @param option {Object}
  - pick {String|Object|Array} Attributes to be copied, other attributes do not trigger subsequent filters
    - When Object: {srcAttrName: 'toAttrName',...} [source object property name] the value corresponding to [target object property name] (name change copy)
  - filter {Function} Filter: {Function(key, SRC, target)}, filter out unqualified attributes (lowest priority), and this of the filter points to the source object src
    - The return value of false is filtered out..
    - When the return value is non-false, the data is not filtered and the return value is a non-null string, the return value is referred to as the [target object property name] (rename copy).
  - mergeObject {Boolean} Merge objects, the default is true
  - mergeArray {Boolean} Merge arrays, the default is true
- @return target object
