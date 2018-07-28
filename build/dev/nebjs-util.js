(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/array/index.js":
/*!****************************!*\
  !*** ./lib/array/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ../common/index */ "./lib/common/index.js"),
    clone = _require.clone,
    equal = _require.equal;
/**
 * 查找值相等的元素的索引位置
 * @param array {Array} 在数组中查找
 * @param element {*} 查找等值元素
 * @param option
 * {
 *  equalValue: true 执行严格的值相等判断，会深度作值对比
 * }
 * @returns {number} 查找到的索引值，-1代表未找到
 */


var findItem = function findItem(array, element) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!Array.isArray(array)) throw new TypeError('array must be a array');
  if (option && option.constructor !== Object) throw new TypeError('option must be a object');
  var _option$equalValue = option.equalValue,
      equalValue = _option$equalValue === undefined ? true : _option$equalValue;

  if (equalValue) {
    return array.findIndex(function (elem) {
      return equal(elem, element);
    });
  } else {
    return array.findIndex(function (elem) {
      return elem === element;
    });
  }
};
/**
 * 判断数组没有重复元素
 * @param array
 * @param option
 * {
 *  equalValue: true 执行严格的值相等判断，会深度作值对比
 * }
 * @returns {boolean}
 */
var uniqueItem = function uniqueItem(array) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!Array.isArray(array)) throw new TypeError('array must be a array');
  if (option && option.constructor !== Object) throw new TypeError('option must be a object');
  var _option$equalValue2 = option.equalValue,
      equalValue = _option$equalValue2 === undefined ? true : _option$equalValue2,
      arrLen = array.length;

  if (equalValue) {
    for (var i = 0; i < arrLen - 1; i++) {
      for (var j = i + 1; j < arrLen; j++) {
        if (equal(array[i], array[j])) {
          return false;
        }
      }
    }
  } else {
    for (var _i = 0; _i < arrLen - 1; _i++) {
      for (var _j = _i + 1; _j < arrLen; _j++) {
        if (array[_i] === array[_j]) {
          return false;
        }
      }
    }
  }
  return true;
};
/**
 * 拷贝
 * @param array {Array} 目标
 * @param element {*|Array} 源对象
 * @param option {Object} 配置
 * deep {Boolean} 深拷贝，默认false
 * 深拷贝的层级数接近无限，注意：当采用deep进行深拷贝时，深拷贝对象中不得出现互相循环引用，否则将陷于无穷向下拷贝直到资源耗尽
 * index {Number} 非负整数，指定插入的位置，未指定时在最后，为0时为首
 * uniqueValue {Boolean} 唯一性限制，默认为false，当为true时，已经存在的元素不会被拷贝（深度值相等）
 * multi {Boolean} 批量复制，默认为false，当为true时，element为要导入的多个元素组成的数组
 * unique {Boolean} 唯一性限制，默认为false，当为true时，已经存在的元素不会被拷贝
 * filter {Function} 过滤器：Function(array, elements, element, index)，过滤掉不合条件的元素（优先级低于deep配置），过滤器的this指向当前源element
 *    返回值是false或其他非真对象时代表过滤掉相应元素
 *    返回值是true时代表直接插入相应元素
 *    返回值是{value: ???}时代表插入value对应的值，此方式可用于作特殊处理，比如实现复杂深度拷贝副本再插入等操作
 * @return []
 */
var copy = function copy(array, element) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!Array.isArray(array)) throw new TypeError('array must be a array');
  if (!option || option.constructor !== Object) throw new TypeError('option must be a object');
  var index = option.index,
      multi = option.multi,
      _option$unique = option.unique,
      unique = _option$unique === undefined ? false : _option$unique,
      _option$uniqueValue = option.uniqueValue,
      uniqueValue = _option$uniqueValue === undefined ? false : _option$uniqueValue,
      filter = option.filter,
      _option$deep = option.deep,
      deep = _option$deep === undefined ? false : _option$deep;

  var es = void 0;
  if (index !== void 0 && (typeof index !== 'number' || index < 0 || index % 1 !== 0)) throw new TypeError('option\'s index must be a non-negative integer');
  if (multi) {
    if (!Array.isArray(element)) throw new TypeError('when option\'s multi is true, then elem must be a array');
    es = element;
  } else {
    es = [element];
  }
  if (unique !== true && unique !== false) throw new TypeError('option\'s unique must be a boolean');
  if (uniqueValue !== true && uniqueValue !== false) throw new TypeError('option\'s uniqueValue must be a boolean');
  if (filter && typeof filter !== 'function') throw new TypeError('option\'s filter must be a function');
  if (deep !== true && deep !== false) throw new TypeError('option\'s deep must be a boolean');
  var len = es.length;
  if (len > 0) {
    var hasSame = void 0;
    if (uniqueValue) {
      hasSame = function hasSame(arg) {
        return array.findIndex(function (elem) {
          return equal(elem, arg);
        }) !== -1;
      };
    } else if (unique) {
      hasSame = function hasSame(arg) {
        return array.findIndex(function (elem) {
          return elem === arg;
        }) !== -1;
      };
    }
    for (var i = 0; i < len; ++i) {
      var e = es[i];
      if (hasSame && hasSame(e)) continue;
      var val = void 0;
      if (filter) {
        var back = filter.call(e, array, es, e, i);
        if (!back) continue;
        if (back.constructor === Object) {
          val = back.value;
        } else {
          val = e;
        }
      } else {
        val = e;
      }
      if (deep) val = clone(val);
      // 压入
      if (index !== void 0) {
        array.splice(index + i, 0, val);
      } else {
        array.push(val);
      }
    }
  }
  return array;
};
var util = {
  copy: copy, findItem: findItem, uniqueItem: uniqueItem
};
module.exports = util;

/***/ }),

/***/ "./lib/common/index.js":
/*!*****************************!*\
  !*** ./lib/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 对比两个对象是否相等
 * @param x
 * @param y
 * @returns {Boolean}
 */
var equal = function equal(x, y) {
  if (arguments.length < 2) throw new TypeError('this method need two argument');
  // 创建一个栈，并在栈顶放入默认的要处理的所有参数（压栈）
  var stack = [{ x: x, y: y }];
  while (stack.length > 0) {
    var _stack$pop = stack.pop(),
        _x = _stack$pop.x,
        _y = _stack$pop.y,
        tpx = typeof _x === 'undefined' ? 'undefined' : _typeof(_x),
        tpy = typeof _y === 'undefined' ? 'undefined' : _typeof(_y);

    if (isNaN(_x) && isNaN(_y) && tpx === 'number' && tpy === 'number') return true; // 都是NaN时
    if (_x === _y) return true; // 值相等或引用相等
    if (tpx !== tpy || _x.constructor !== _y.constructor) return false; // 基础或引用类型不同
    if (_x instanceof Date && _y instanceof Date || _x instanceof RegExp && _y instanceof RegExp || _x instanceof Error && _y instanceof Error) return _x.toString() === _y.toString();
    if (!(_x instanceof Object && _y instanceof Object)) return false;
    if (Array.isArray(_x)) {
      if (_x.length !== _y.length) return false;
      for (var p in _y) {
        stack.push({ x: _x[p], y: _y[p] });
      }
    } else {
      if (_x.isPrototypeOf(_y) || _y.isPrototypeOf(_x)) return false;
      for (var _p in _y) {
        var h = _y.hasOwnProperty(_p);
        if (h !== _x.hasOwnProperty(_p)) return false;
        if (h) {
          stack.push({ x: _x[_p], y: _y[_p] });
        }
      }
      for (var _p2 in _x) {
        if (_y.hasOwnProperty(_p2) !== _x.hasOwnProperty(_p2)) return false;
      }
    }
  }
  return true;
};
/**
 * 深拷贝对象属性值
 * @param to 目标对象或数组
 * @param from 拷贝源对象或数组
 * @param fromName 目标属性名或数组下标
 * @param toName 拷贝源对象属性名或数组下标
 * @param mergeObject 合并对象属性模式
 * @param mergeArray 合并数组模式
 */
var deepAssign = function deepAssign(to, from, fromName) {
  var toName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : fromName;
  var mergeObject = arguments[4];
  var mergeArray = arguments[5];

  // 创建一个栈，并在栈顶放入默认的要处理的所有参数（压栈）
  var stack = [{ to: to, from: from, fromName: fromName, toName: toName }];
  while (stack.length > 0) {
    // 当前操作栈（参数），从栈顶取出的参数
    var arg = stack.pop(),
        _to = arg.to,
        _from = arg.from,
        _fromName = arg.fromName,
        _toName = arg.toName,
        fromElem = _from[_fromName];
    var toElem = _to[_toName];
    if (fromElem !== toElem) {
      if (!(fromElem && (typeof fromElem === 'undefined' ? 'undefined' : _typeof(fromElem)) === 'object')) {
        _to[_toName] = fromElem;
      } else if (Array.isArray(fromElem)) {
        var len = fromElem.length;
        if (!mergeArray || !Array.isArray(toElem)) toElem = _to[_toName] = [];
        var toLen = toElem.length;
        for (var i = len - 1; i >= 0; --i) {
          stack.push({ to: toElem, from: fromElem, fromName: i, toName: i + toLen });
        }
      } else if (fromElem.constructor === Date) {
        _to[_toName] = new Date(fromElem.getTime());
      } else if (fromElem.constructor === RegExp) {
        var attr = '';
        if (fromElem.global) attr += 'g';
        if (fromElem.ignoreCase) attr += 'i';
        if (fromElem.multiline) attr += 'm';
        _to[_toName] = new RegExp(fromElem.source, attr);
        _to[_toName].lastIndex = fromElem.lastIndex;
      } else if (fromElem.constructor === Error) {
        _to[_toName] = new Error(fromElem.toString());
      } else {
        if (!mergeObject || !toElem || toElem.constructor !== Object || !((typeof toElem === 'undefined' ? 'undefined' : _typeof(toElem)) === 'object' && !Array.isArray(toElem))) {
          var ks = fromElem.constructor;
          toElem = _to[_toName] = ks === Object ? {} : new ks();
        }
        for (var name in fromElem) {
          if (fromElem.hasOwnProperty(name)) stack.push({ to: toElem, from: fromElem, fromName: name, toName: name });
        }
      }
    }
  }
};
/**
 * 克隆/深拷贝对象
 * @param src
 * @returns {*} 被拷贝数据的副本
 */
var clone = function clone(src) {
  if (src && !(src instanceof Date) && !(src instanceof Error) && !(src instanceof RegExp)) {
    var tp = typeof src === 'undefined' ? 'undefined' : _typeof(src);
    if (tp === 'string') {
      src = src.slice();
    } else if (tp !== 'function' && tp !== 'boolean' && tp !== 'number' && tp !== 'symbol') {
      var to = void 0;
      if (Array.isArray(src)) {
        to = [];
      } else if (src.constructor === Object) {
        to = {};
      } else {
        to = new src.constructor();
      }
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          deepAssign(to, src, key, key);
        }
      }
      src = to;
    }
  }
  return src;
};
var common = { deepAssign: deepAssign, clone: clone, equal: equal };
module.exports = common;

/***/ }),

/***/ "./lib/data/Data.js":
/*!**************************!*\
  !*** ./lib/data/Data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Data类
 */
var Data = function () {
  function Data() {
    _classCallCheck(this, Data);

    this.info = {};
    this.list = [];
  }

  /**
   * 设置数据
   * @param name
   * @param value
   */


  _createClass(Data, [{
    key: 'setData',
    value: function setData(name, value) {
      if (!(name && typeof name === 'string' && name.length > 0)) throw new TypeError('name must be a non-empty string');
      var info = this.info,
          list = this.list,
          dt = { name: name, index: list.length, value: value };

      info[name] = dt;
      list.push(dt);
      return dt;
    }

    /**
     * 通过name获取数据
     * @param name
     */

  }, {
    key: 'getData',
    value: function getData(name) {
      if (!(name && typeof name === 'string' && name.length > 0)) throw new TypeError('name must be a non-empty string');
      return this.info[name];
    }

    /**
     * 通过index获取数据
     * @param index
     */

  }, {
    key: 'getDataByIndex',
    value: function getDataByIndex(index) {
      if (!(index && typeof index === 'number' && index >= 0)) throw new TypeError('index must be a non-negative integer');
      return this.list[index];
    }
  }]);

  return Data;
}();

module.exports = Data;

/***/ }),

/***/ "./lib/data/HashData.js":
/*!******************************!*\
  !*** ./lib/data/HashData.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LexData = __webpack_require__(/*! ./Data */ "./lib/data/Data.js");

/**
 * HashData类
 */

var HashData = function () {
  function HashData() {
    _classCallCheck(this, HashData);

    this.hash = {};
  }

  /**
   * 设置数据
   * @param hashName
   * @param data
   */


  _createClass(HashData, [{
    key: 'setHashData',
    value: function setHashData(hashName, data) {
      if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
      if (!(data && data instanceof LexData)) throw new TypeError('data must be LexData');
      var hash = this.hash;

      hash[hashName] = data;
      return data;
    }

    /**
     * 获取Data数据
     * @param hashName
     */

  }, {
    key: 'getHashData',
    value: function getHashData(hashName) {
      if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
      return this.hash[hashName];
    }

    /**
     * 通过name设置data数据
     * @param hashName
     * @param dataName
     * @param dataValue
     */

  }, {
    key: 'setData',
    value: function setData(hashName, dataName, dataValue) {
      if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
      if (!(dataName && typeof dataName === 'string' && dataName.length > 0)) throw new TypeError('dataName must be a non-empty string');
      var hash = this.hash;

      var data = hash[hashName] || new LexData();
      return data.setData(dataName, dataValue);
    }

    /**
     * 通过name获取data数据
     * @param hashName
     * @param dataName
     */

  }, {
    key: 'getData',
    value: function getData(hashName, dataName) {
      if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
      if (!(dataName && typeof dataName === 'string' && dataName.length > 0)) throw new TypeError('dataName must be a non-empty string');
      var data = this.hash[hashName];
      return data ? data.getData(dataName) : void 0;
    }

    /**
     * 通过index获取data数据
     * @param hashName
     * @param index
     */

  }, {
    key: 'getHashByIndex',
    value: function getHashByIndex(hashName, index) {
      if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
      if (!(index && typeof index === 'number' && index >= 0)) throw new TypeError('index must be a non-negative integer');
      var data = this.hash[hashName];
      return data ? data.getDataByIndex(index) : void 0;
    }
  }]);

  return HashData;
}();

module.exports = HashData;

/***/ }),

/***/ "./lib/data/index.js":
/*!***************************!*\
  !*** ./lib/data/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Data = __webpack_require__(/*! ./Data */ "./lib/data/Data.js");
var HashData = __webpack_require__(/*! ./HashData */ "./lib/data/HashData.js");
module.exports = { Data: Data, HashData: HashData };

/***/ }),

/***/ "./lib/date/index.js":
/*!***************************!*\
  !*** ./lib/date/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replaceReg = /(yyyy|yy|MM?|dd?|HH?|ss?|mm?)/g,
    stringToDateRegs = {
  "yyyy": [{ num: 4, reg: /yyyy/ }, { num: 2, reg: /yy/ }],
  "MM": [{ num: 2, reg: /MM/ }, { num: 1, reg: /M/ }],
  "dd": [{ num: 2, reg: /dd/ }, { num: 1, reg: /d/ }],
  "HH": [{ num: 2, reg: /HH/ }, { num: 1, reg: /H/ }],
  "mm": [{ num: 2, reg: /mm/ }, { num: 1, reg: /m/ }],
  "ss": [{ num: 2, reg: /ss/ }, { num: 1, reg: /s/ }]
},
    hrReg = /-/g;
/**
 * 从日期/时间获取格式化字符串
 * @param date {Date}
 * @param format {String} 格式化format "yyyy-MM-dd HH:mm:ss"
 * @returns {String}
 */
var toFormatString = function toFormatString(date, format) {
  if (!date) return "";
  format = format || "yyyy-MM-dd HH:mm:ss";
  date = new Date(date);
  if (!(date instanceof Date)) return "";
  var dict = {
    "yyyy": date.getFullYear(),
    "yy": (date.getFullYear() + "").substr(2),
    "M": date.getMonth() + 1,
    "d": date.getDate(),
    "H": date.getHours(),
    "m": date.getMinutes(),
    "s": date.getSeconds(),
    "MM": ("" + (date.getMonth() + 101)).substr(1),
    "dd": ("" + (date.getDate() + 100)).substr(1),
    "HH": ("" + (date.getHours() + 100)).substr(1),
    "mm": ("" + (date.getMinutes() + 100)).substr(1),
    "ss": ("" + (date.getSeconds() + 100)).substr(1)
  };
  return format.replace(replaceReg, function () {
    return dict[arguments[0]];
  });
};
/**
 * 从格式化字符串获取日期/时间
 * @param dateStr {String} 日期/时间字符串
 * @param format {String} 格式化format  默认"yyyy-MM-dd HH:mm:ss"
 * @returns {*}
 */
var fromFormatString = function fromFormatString(dateStr, format) {
  if (format) {
    if (dateStr.length < format.length) {
      return null;
    }
    var date = { "yyyy": 0, "MM": 0, "dd": 0, "HH": 0, "mm": 0, "ss": 0 };
    var attr = void 0,
        testRegs = void 0,
        index = void 0,
        i = void 0,
        testLen = void 0,
        num = void 0;
    for (attr in stringToDateRegs) {
      testRegs = stringToDateRegs[attr];
      for (i = 0, testLen = testRegs.length; i < testLen; ++i) {
        if ((index = format.search(testRegs[i].reg)) !== -1) {
          num = testRegs[i].num;
          date[attr] = dateStr.substr(index, num);
          if (date[attr]) {
            date[attr] = parseInt(date[attr]);
            break;
          }
        }
      }
    }
    return new Date(date.yyyy, date.MM - 1, date.dd, date.HH, date.mm, date.ss, 0);
  }
  if (dateStr) {
    if (typeof dateStr === "string") {
      dateStr = dateStr.replace(hrReg, "/");
    }
    return new Date(dateStr);
  }
  return new Date();
};
var util = { toFormatString: toFormatString, fromFormatString: fromFormatString };
module.exports = util;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__(/*! ./common/index */ "./lib/common/index.js");
var object = __webpack_require__(/*! ./object/index */ "./lib/object/index.js");
var string = __webpack_require__(/*! ./string/index */ "./lib/string/index.js");
var array = __webpack_require__(/*! ./array/index */ "./lib/array/index.js");
var date = __webpack_require__(/*! ./date/index */ "./lib/date/index.js");
var data = __webpack_require__(/*! ./data/index */ "./lib/data/index.js");
var util = { common: common, object: object, string: string, array: array, date: date, data: data };
module.exports = util;

/***/ }),

/***/ "./lib/object/index.js":
/*!*****************************!*\
  !*** ./lib/object/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ../common/index */ "./lib/common/index.js"),
    deepAssign = _require.deepAssign;
/**
 * 清空对象
 * @param obj
 */


var clear = function clear(obj) {
  if (!obj || obj.constructor !== Object) throw new TypeError('obj must be a object');
  obj = Object(obj);
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
  }
  return obj;
};
/**
 * 深拷贝一个对象至另一个对象，可指定只拷贝满足条件的属性，可为属性指定别名
 * @param to {Object} 目标
 * @param from {Object} 源对象
 * @param option {Object} 配置
 * deep {Boolean} 深拷贝，默认false
 * 深拷贝的层级数接近无限，注意：当采用deep进行深拷贝时，深拷贝对象中不得出现互相循环引用，否则将陷于无穷向下拷贝直到资源耗尽
 * omit {String|Array|Function} 要删除的属性，不会再触发后面的过滤器
 * filter {Function} 过滤器：Function(key, src, target)，过滤掉不合条件的属性（优先级最低），过滤器的this指向源对象src
 *    返回值为false的被过滤掉..
 *    当返回值是非false时，不过滤数据，且返回值是非空字符串时，返回值作为【目标对象属性名称】（更名拷贝）
 * mergeObject {Boolean} 合并对象 默认真
 * mergeArray {Boolean} 合并数组 默认真
 * @return {*}
 */
var copy = function copy(to, from) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!to || to.constructor !== Object) throw new TypeError('to must be a object');
  if (!from || from.constructor !== Object) throw new TypeError('from must be a object');
  if (!option || option.constructor !== Object) throw new TypeError('option must be a object');
  var omit = option.omit,
      _option$deep = option.deep,
      deep = _option$deep === undefined ? false : _option$deep,
      filter = option.filter,
      _option$mergeObject = option.mergeObject,
      mergeObject = _option$mergeObject === undefined ? true : _option$mergeObject,
      _option$mergeArray = option.mergeArray,
      mergeArray = _option$mergeArray === undefined ? true : _option$mergeArray;

  if (omit) {
    if (typeof omit === 'string') {
      omit = [omit];
    }
    if (omit.length === 0) omit = null;
  }
  if (filter && typeof filter !== 'function') throw new TypeError('option\'s filter must be a function');
  if (omit || filter) {
    for (var key in from) {
      if (from.hasOwnProperty(key)) {
        if (!omit || omit.indexOf(key) === -1) {
          if (filter) {
            var name = null;
            var back = filter.call(from, key, from, to);
            if (back !== false) {
              name = back && typeof back === 'string' ? back : key;
              if (deep) {
                deepAssign(to, from, key, name, mergeObject, mergeArray);
              } else {
                to[name] = from[key];
              }
            }
          } else {
            if (deep) {
              deepAssign(to, from, key, key, mergeObject, mergeArray);
            } else {
              to[key] = from[key];
            }
          }
        }
      }
    }
  } else if (to !== from) {
    if (deep) {
      for (var _key in from) {
        if (from.hasOwnProperty(_key)) {
          deepAssign(to, from, _key, _key, mergeObject, mergeArray);
        }
      }
    } else {
      for (var _key2 in from) {
        if (from.hasOwnProperty(_key2)) {
          to[_key2] = from[_key2];
        }
      }
    }
  }
  return to;
};
/**
 * 深选择拷贝一个对象至另一个对象，必须指定要拷贝的属性，可指定拷贝条件，可为属性指定别名
 * @param to {Object} 目标
 * @param from {Object} 源对象
 * @param option {Object} 配置
 * deep {Boolean} 深拷贝，默认false
 * 深拷贝的层级数接近无限，注意：当采用deep进行深拷贝时，深拷贝对象中不得出现互相循环引用，否则将陷于无穷向下拷贝直到资源耗尽
 * pick {String|Object|Array} 要拷贝的属性，其他属性不会触发后续的过滤器
 *    当为Object时：{srcAttrName: 'toAttrName', ...}  【源对象属性名称】对应的值作为【目标对象属性名称】（更名拷贝）
 * filter {Function} 过滤器：{Function(key, src, target)}，过滤掉不合条件的属性（优先级最低），过滤器的this指向源对象src
 *    返回值为false的被过滤掉..
 *    当返回值是非false时，不过滤数据，且返回值是非空字符串时，返回值作为【目标对象属性名称】（更名拷贝）
 * mergeObject {Boolean} 合并对象 默认真
 * mergeArray {Boolean} 合并数组 默认真
 * @return {*}
 */
var pick = function pick(to, from) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!to || to.constructor !== Object) throw new TypeError('to must be a object');
  if (!from || from.constructor !== Object) throw new TypeError('from must be a object');
  if (!option || option.constructor !== Object) throw new TypeError('option must be a object');
  var pick = option.pick,
      _option$deep2 = option.deep,
      deep = _option$deep2 === undefined ? false : _option$deep2,
      filter = option.filter,
      _option$mergeObject2 = option.mergeObject,
      mergeObject = _option$mergeObject2 === undefined ? true : _option$mergeObject2,
      _option$mergeArray2 = option.mergeArray,
      mergeArray = _option$mergeArray2 === undefined ? true : _option$mergeArray2;

  if (to === from) {
    return to;
  }
  if (pick) {
    if (typeof pick === 'string') {
      pick = [pick];
    }
    if (pick.length === 0) pick = null;
  }
  if (!pick) return to;
  if (filter && typeof filter !== 'function') throw new TypeError('option\'s filter must be a function');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pick[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (from.hasOwnProperty(key)) {
        if (filter) {
          var name = null;
          var back = filter.call(from, key, from, to);
          if (back !== false) {
            name = back && typeof back === 'string' ? back : key;
            if (deep) {
              deepAssign(to, from, key, name, mergeObject, mergeArray);
            } else {
              to[name] = from[key];
            }
          }
        } else {
          if (deep) {
            deepAssign(to, from, key, key, mergeObject, mergeArray);
          } else {
            to[key] = from[key];
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return to;
};
var util = {
  clear: clear, copy: copy, pick: pick
};
module.exports = util;

/***/ }),

/***/ "./lib/string/index.js":
/*!*****************************!*\
  !*** ./lib/string/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reg = function () {
  // 空白符
  var whiteChar = '[\\x20\\t\\r\\n\\f]',

  // 空白字符串
  white = whiteChar + '+',

  // 空白区
  whitespace = '(?:' + white + ')*',

  // 去左右空白区
  trim = '(^' + whitespace + ')|(' + whitespace + '$)',

  // 左空白区
  trimLeft = '(^' + whitespace + ')',

  // 右空白区
  trimRight = '(' + whitespace + '$)',

  // 用于替换转义字符(双字节编码)(普通转义)(换行转义)
  escapeReplace = '\\\\(?:([0-9a-fA-F]{1,6}(?:\\r\\n|[\\x20\\n\\r\\t\\f])?)|([^\\n\\r\\f0-9a-fA-F])|((?:\\n|\\r\\n|\\r|\\f)))';
  return {
    // 去左右空白区
    trim: new RegExp(trim, 'g'),
    // 去左空白区
    trimLeft: new RegExp(trimLeft, 'g'),
    // 去右空白区
    trimRight: new RegExp(trimRight, 'g'),
    // 用于替换转义字符
    escape: new RegExp('' + escapeReplace, 'g')
  };
}();
/**
 * 替换转义方法
 * @param matchStr 匹配的字符串
 * @param escapeUnicode (双字节编码)(普通转义)(换行转义)
 * @param escapeChar 匹配起始位置
 * @param escapeNewline 字符串本身
 * @returns {*}
 */
var escapeReplaceFun = function escapeReplaceFun(matchStr, escapeUnicode, escapeChar, escapeNewline) {
  if (escapeNewline) return '';
  if (escapeChar) return escapeChar;
  var code = parseInt(escapeUnicode, 16);
  var sub = code - 0x10000;
  return sub < 0 ? /* 65536*/String.fromCharCode(code) : String.fromCharCode(sub >> 10 | 0xD800, sub & 0x3FF | 0xDC00);
};
var util = {
  /**
   * 截取字符串两端空白符
   * @param str
   * @returns {*}
   */
  trim: function trim(str) {
    if (typeof str !== 'string') return new TypeError('str must be a string');
    return str.replace(reg.trim, '');
  },

  /**
   * 截取字符串左端空白符
   * @param str
   * @returns {*}
   */
  trimLeft: function trimLeft(str) {
    if (typeof str !== 'string') return new TypeError('str must be a string');
    return str.replace(reg.trimLeft, '');
  },

  /**
   * 截取字符串右端空白符
   * @param str
   * @returns {*}
   */
  trimRight: function trimRight(str) {
    if (typeof str !== 'string') return new TypeError('str must be a string');
    return str.replace(reg.trimRight, '');
  },

  /**
   * 对字符串中的转义字符进行转义
   * @param str
   * @returns {*}
   */
  escape: function escape(str) {
    if (typeof str !== 'string') return new TypeError('code must be a string');
    return str.length > 0 ? str.replace(reg.escape, escapeReplaceFun) : str;
  }
};
module.exports = util;

/***/ })

/******/ });
});