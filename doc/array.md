
## Contents

- [demo](#demo)
- [api](#api)

The util.array has array to manipulate Array objects, using example
##array

<span id="array"></span>
##array

<span id="demo"></span>
###array demo

```javascript
const util = require('nebjs-util');
// Push an unrepeatable element to an array
util.array.uniquePush(['a'], 'a', 'b', 'c');
// console.log: ['a', 'b', 'c']
```

<span id="api"></span>
###array api
####util.array.uniquePush(array, element...)
This method can be used to press non-repeating elements into an array
- @param element {*} element 
- @return target array
