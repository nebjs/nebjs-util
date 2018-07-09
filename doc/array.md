# array
The util.array has array to manipulate Array objects, using example

## Contents
- [Demo](#Demo)
- [Api](#Api)

<span id="Demo"></span>
### Demo
```javascript
const util = require('nebjs-util');
// Push an unrepeatable element to an array
util.array.uniquePush(['a'], 'a', 'b', 'c');
// console.log: ['a', 'b', 'c']
```

<span id="Api"></span>
### Api
#### util.array.uniquePush(array, element...)
This method can be used to press non-repeating elements into an array
- @param element {*} element 
- @return target array
