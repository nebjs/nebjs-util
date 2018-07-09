# nebjs-util: A Javascript Common Development Library

A Javascript Common Development Library For NebJS/Web/NodeJS

## Install

```
npm install nebjs-util
```

## Getting started
```javascript
const util = require('nebjs-util');
util.object.clear({a: 123, b: 456});
util.object.copy({}, {a: 123, b: 456});
util.string.trim('  abc  ');
util.array.uniquePush(['a'], 'a', 'b', 'c');
```

## Contents && Document

- [object](/doc/object.md)
- [string](/doc/string.md)
- [array](/doc/array.md)

<span id="object"></span>

##Object && Namespace
### util.object
The util.object has methods to manipulating Object type objects, using examples
- [object  => document](/doc/object.md)

### util.string
The util.string has methods to manipulate String strings, using examples
- [string  => document](/doc/string.md)

### util.array
The util.array has array to manipulate Array objects, using example
- [array  => document](/doc/array.md)

