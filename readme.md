<img width="160px" src="https://raw.githubusercontent.com/nebjs/nebjs-util-web/master/images/logo.png">

# nebjs-util: A Javascript Common Development Library

A Javascript Common Development Library For NebJS/Web/NodeJS, 
For a complete explanation, go to github :[nebjs-util](https://github.com/nebjs/nebjs-util)

[![npm](https://img.shields.io/npm/v/nebjs-util.svg)](https://www.npmjs.com/package/nebjs-util)
[![npm downloads](https://img.shields.io/npm/dm/nebjs-util.svg)](https://www.npmjs.com/package/nebjs-util)
[![GitHub release](https://img.shields.io/github/release/nebjs/nebjs-util.svg)](https://github.com/nebjs/nebjs-util)
[![GitHub commits](https://img.shields.io/github/commits-since/nebjs/nebjs-util/v1.0.8.svg)](https://github.com/nebjs/nebjs-util)
[![npm license](https://img.shields.io/npm/l/nebjs-util.svg)](/LICENSE)
<!--
[![GitHub tag](https://img.shields.io/github/tag/nebjs/nebjs-util.svg)](https://github.com/nebjs/nebjs-util)
[![GitHub package](https://img.shields.io/github/package-json/v/nebjs/nebjs-util.svg)](https://github.com/nebjs/nebjs-util)
-->

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
util.array.copy(['a'], 'a');
util.array.findItem(["a", "b", {"a": "b", "b": "c"}], {'b': 'c', 'a': 'b'});
util.array.uniqueItem(['a', 'b', 'c', {'a': 'b', 'b': 'c'}, {'b': 'c', 'a': 'b'}]);
util.date.toFormatString(new Date(), "yyyy年MM月dd日");
util.date.fromFormatString('2018年07月18日 16:36:49', 'yyyy年MM月dd日 HH:mm:ss');
util.common.clone({a: {b: "c"}, b: ["a"]});
util.common.equal(['abc'], ['abc']);
```

## Contents && Document

- [object](/doc/object.md)
- [string](/doc/string.md)
- [array](/doc/array.md)
- [date](/doc/date.md)
- [common](/doc/common.md)

<span id="object"></span>

## Object && Namespace
### util.object
The util.object has methods to manipulating Object type objects
- [object  => document](/doc/object.md)

### util.string
The util.string has methods to manipulate String strings
- [string  => document](/doc/string.md)

### util.array
The util.array has methods to manipulate Array objects
- [array  => document](/doc/array.md)

### util.date
The util.date has methods to manipulate Date objects
- [date  => document](/doc/date.md)

### util.common
The util.common has common methods
- [common  => document](/doc/common.md)
