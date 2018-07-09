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

const { cloneValue } = __webpack_require__(/*! ../common */ "./lib/common.js");
/**
 * 拷贝
 * @param array {Array} 目标
 * @param element {*|Array} 源对象
 * @param option {Object} 配置
 * index {Number}： 非负整数，指定插入的位置，未指定时在最后，为0时为首
 * multi {Boolean}：批量复制，默认为false，当为true时，element为要导入的多个元素组成的数组
 * unique {Boolean}：唯一性限制，默认为false，当为true时，已经存在的元素不会被拷贝
 * filter {Function} 过滤器：Function(array, elements, element, index)，过滤掉不合条件的元素（优先级低于deep配置），过滤器的this指向当前源element
 *    返回值是false或其他非真对象时代表过滤掉相应元素
 *    返回值是true时代表直接插入相应元素
 *    返回值是{value: ???}时代表插入value对应的值，此方式可用于作特殊处理，比如实现复杂深度拷贝副本再插入等操作
 * @return []
 */
const copy = function (array, element, option = {}) {
  if (!Array.isArray(array)) throw new TypeError('array must be a array');
  if (!option || option.constructor !== Object) throw new TypeError('option must be a object');
  const { index, multi, unique = false, filter, deep = false } = option;
  let es;
  if (index !== undefined && (typeof index !== 'number' || index < 0 || index % 1 !== 0)) throw new TypeError('option\'s index must be a non-negative integer');
  if (multi) {
    if (!Array.isArray(element)) throw new TypeError('when option\'s multi is true, then elem must be a array');
    es = element;
  } else {
    es = [element];
  }
  if (unique !== true && unique !== false) throw new TypeError('option\'s unique must be a boolean');
  if (filter && typeof filter !== 'function') throw new TypeError('option\'s filter must be a function');
  if (deep !== true && deep !== false) throw new TypeError('option\'s deep must be a boolean');
  const len = es.length;
  if (len > 0) {
    let hasSame;
    if (unique) {
      hasSame = arg => {
        return array.findIndex(elem => {
          return elem === arg;
        }) !== -1;
      };
    }
    for (let i = 0; i < len; ++i) {
      const e = es[i];
      if (hasSame && hasSame(e)) continue;
      let val;
      if (filter) {
        const back = filter.call(e, array, es, e, i);
        if (!back) continue;
        if (back.constructor === Object) {
          val = back.value;
        } else {
          val = e;
        }
      } else {
        val = e;
      }
      if (deep) {
        val = cloneValue(val);
      }
      // 压入
      if (index !== undefined) {
        array.splice(index + i, 0, val);
      } else {
        array.push(val);
      }
    }
  }
  return array;
};
const util = {
  copy
};
module.exports = util;

/***/ }),

/***/ "./lib/common.js":
/*!***********************!*\
  !*** ./lib/common.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

const hasOwnProperty = Object.prototype.hasOwnProperty;
const isObject = function (x) {
  return x !== null && x !== undefined && typeof x === 'object';
};
const assignKey = function (to, from, fromName, toName = fromName, mergeObject, mergeArray) {
  // 创建一个栈，并在栈顶放入默认的要处理的所有参数（压栈）
  const stack = [{ to, from, fromName, toName }];
  while (stack.length > 0) {
    // 当前操作栈（参数），从栈顶取出的参数
    const arg = stack.pop(),
          { to, from, fromName, toName } = arg,
          fromElem = from[fromName];
    let toElem = to[toName];
    if (fromElem !== toElem) {
      if (!isObject(fromElem) /*|| !hasOwnProperty.call(from, fromName)*/) {
          to[toName] = fromElem;
        } else if (Array.isArray(fromElem)) {
        const len = fromElem.length;
        if (!mergeArray || !Array.isArray(toElem)) {
          toElem = to[toName] = [];
        }
        const toLen = toElem.length;
        for (let i = len - 1; i >= 0; --i) {
          stack.push({ to: toElem, from: fromElem, fromName: i, toName: i + toLen });
        }
      } else {
        if (!mergeObject || !isObject(toElem)) {
          toElem = to[toName] = {};
        }
        for (const name in fromElem) {
          if (hasOwnProperty.call(fromElem, name)) {
            stack.push({ to: toElem, from: fromElem, fromName: name, toName: name });
          }
        }
      }
    }
  }
};
const cloneValue = function (val) {
  if (val && !(val instanceof Date) && !(val instanceof Error) && !(val instanceof RegExp)) {
    const tp = typeof val;
    if (tp === 'string') {
      val = val.slice();
    } else if (tp !== 'function' && tp !== 'boolean' && tp !== 'number' && tp !== 'symbol') {
      let to;
      if (Array.isArray(val)) {
        to = [];
      } else if (val.constructor === Object) {
        to = {};
      } else {
        to = new val.constructor();
      }
      for (const key in val) {
        if (hasOwnProperty.call(val, key)) {
          assignKey(to, val, key, key);
        }
      }
      val = to;
    }
  }
  return val;
};
const common = { hasOwnProperty, isObject, assignKey, cloneValue };
module.exports = common;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const common = __webpack_require__(/*! ./common */ "./lib/common.js");
const object = __webpack_require__(/*! ./object/index */ "./lib/object/index.js");
const string = __webpack_require__(/*! ./string/index */ "./lib/string/index.js");
const array = __webpack_require__(/*! ./array/index */ "./lib/array/index.js");
const util = { common, object, string, array };
module.exports = util;

/***/ }),

/***/ "./lib/object/index.js":
/*!*****************************!*\
  !*** ./lib/object/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { hasOwnProperty, assignKey } = __webpack_require__(/*! ../common */ "./lib/common.js");
/**
 * 清空对象
 * @param obj
 */
const clear = function (obj) {
  if (!obj || obj.constructor !== Object) throw new TypeError('obj must be a object');
  obj = Object(obj);
  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) {
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
 * omit {String|Array|Function} : 要删除的属性，不会再触发后面的过滤器
 * filter {Function} 过滤器：Function(key, src, target)，过滤掉不合条件的属性（优先级最低），过滤器的this指向源对象src
 *    返回值为false的被过滤掉..
 *    当返回值是非false时，不过滤数据，且返回值是非空字符串时，返回值作为【目标对象属性名称】（更名拷贝）
 * mergeObject {Boolean} 合并对象 默认真
 * mergeArray {Boolean} 合并数组 默认真
 * @return {*}
 */
const copy = function (to, from, option = {}) {
  if (!to || to.constructor !== Object) throw new TypeError('to must be a object');
  if (!from || from.constructor !== Object) throw new TypeError('from must be a object');
  if (!option || option.constructor !== Object) throw new TypeError('option must be a object');
  let { omit, filter, mergeObject = true, mergeArray = true } = option;
  if (omit) {
    if (typeof omit === 'string') {
      omit = [omit];
    }
    if (omit.length === 0) omit = null;
  }
  if (filter && typeof filter !== 'function') throw new TypeError('option\'s filter must be a function');
  if (omit || filter) {
    for (const key in from) {
      if (hasOwnProperty.call(from, key)) {
        if (!omit || omit.indexOf(key) === -1) {
          if (filter) {
            let name = null;
            const back = filter.call(from, key, from, to);
            if (back !== false) {
              name = back && typeof back === 'string' ? back : key;
              assignKey(to, from, key, name, mergeObject, mergeArray);
            }
          } else {
            assignKey(to, from, key, key, mergeObject, mergeArray);
          }
        }
      }
    }
    return to;
  } else {
    if (to === from) {
      return to;
    }
    from = Object(from);
    for (const key in from) {
      if (hasOwnProperty.call(from, key)) {
        assignKey(to, from, key, key, mergeObject, mergeArray);
      }
    }
    return to;
  }
};
/**
 * 深选择拷贝一个对象至另一个对象，必须指定要拷贝的属性，可指定拷贝条件，可为属性指定别名
 * @param to {Object} 目标
 * @param from {Object} 源对象
 * @param option {Object} 配置
 * pick {String|Object|Array}: 要拷贝的属性，其他属性不会触发后续的过滤器
 *    当为Object时：{srcAttrName: 'toAttrName', ...}  【源对象属性名称】对应的值作为【目标对象属性名称】（更名拷贝）
 * filter {Function} 过滤器：{Function(key, src, target)}，过滤掉不合条件的属性（优先级最低），过滤器的this指向源对象src
 *    返回值为false的被过滤掉..
 *    当返回值是非false时，不过滤数据，且返回值是非空字符串时，返回值作为【目标对象属性名称】（更名拷贝）
 * mergeObject {Boolean} 合并对象 默认真
 * mergeArray {Boolean} 合并数组 默认真
 * @return {*}
 */
const pick = function (to, from, option = {}) {
  if (!to || to.constructor !== Object) throw new TypeError('to must be a object');
  if (!from || from.constructor !== Object) throw new TypeError('from must be a object');
  if (!option || option.constructor !== Object) throw new TypeError('option must be a object');
  let { pick, filter, mergeObject = true, mergeArray = true } = option;
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
  for (const key of pick) {
    if (hasOwnProperty.call(from, key)) {
      if (filter) {
        let name = null;
        const back = filter.call(from, key, from, to);
        if (back !== false) {
          name = back && typeof back === 'string' ? back : key;
          assignKey(to, from, key, name, mergeObject, mergeArray);
        }
      } else {
        assignKey(to, from, key, key, mergeObject, mergeArray);
      }
    }
  }
  return to;
};
const util = {
  clear, copy, pick
};
module.exports = util;

/***/ }),

/***/ "./lib/string/index.js":
/*!*****************************!*\
  !*** ./lib/string/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const reg = (() => {
  // 空白符
  const whiteChar = '[\\x20\\t\\r\\n\\f]',

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
})();
/**
 * 替换转义方法
 * @param matchStr 匹配的字符串
 * @param escapeUnicode (双字节编码)(普通转义)(换行转义)
 * @param escapeChar 匹配起始位置
 * @param escapeNewline 字符串本身
 * @returns {*}
 */
const escapeReplaceFun = function (matchStr, escapeUnicode, escapeChar, escapeNewline) {
  if (escapeNewline) return '';
  if (escapeChar) return escapeChar;
  const code = parseInt(escapeUnicode, 16);
  let sub = code - 0x10000;
  return sub < 0 ? /* 65536*/String.fromCharCode(code) : String.fromCharCode(sub >> 10 | 0xD800, sub & 0x3FF | 0xDC00);
};
const util = {
  /**
   * 截取字符串两端空白符
   * @param str
   * @returns {*}
   */
  trim(str) {
    if (typeof str !== 'string') return new TypeError('str must be a string');
    return str.replace(reg.trim, '');
  },
  /**
   * 截取字符串左端空白符
   * @param str
   * @returns {*}
   */
  trimLeft(str) {
    if (typeof str !== 'string') return new TypeError('str must be a string');
    return str.replace(reg.trimLeft, '');
  },
  /**
   * 截取字符串右端空白符
   * @param str
   * @returns {*}
   */
  trimRight(str) {
    if (typeof str !== 'string') return new TypeError('str must be a string');
    return str.replace(reg.trimRight, '');
  },
  /**
   * 对字符串中的转义字符进行转义
   * @param str
   * @returns {*}
   */
  escape(str) {
    if (typeof str !== 'string') return new TypeError('code must be a string');
    return str.length > 0 ? str.replace(reg.escape, escapeReplaceFun) : str;
  }
};
module.exports = util;

/***/ })

/******/ });
});