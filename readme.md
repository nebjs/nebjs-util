<h1 align="center">
  <a href="http://chaijs.com" title="Chai Documentation">
    <img width="160px" src="https://raw.githubusercontent.com/nebjs/nebjs-util-web/master/images/logo.png">
  </a>
  <br />
  nebjs
</h1>

# nebjs-util: A Javascript Common Development Library

<p align=center>
A Javascript Common Development Library For NebJS/Web/NodeJS
</p>

<p align=center>
  <a href="./LICENSE">
    <img alt="license:mit" src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square" />
  </a>
  <a href="https://github.com/nebjs/nebjs-util/releases">
    <img alt="tag:?" src="https://img.shields.io/github/tag/nebjs/nebjs-util.svg?style=flat-square"/>
  </a>
  <a href="https://www.npmjs.com/packages/nebjs-util">
    <img alt="node:?" src="https://img.shields.io/badge/node-%3E=4.0-blue.svg?style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/nebjs-util">
    <img alt="downloads:?" src="https://img.shields.io/npm/dm/nebjs-util.svg?style=flat-square" />
  </a>
</p>

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

## Object && Namespace
### util.object
The util.object has methods to manipulating Object type objects
- [object  => document](/doc/object.md)

### util.string
The util.string has methods to manipulate String strings
- [string  => document](/doc/string.md)

### util.array
The util.array has array to manipulate Array objects
- [array  => document](/doc/array.md)

