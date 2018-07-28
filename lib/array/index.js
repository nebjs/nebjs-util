const {clone, equal} = require('../common/index');
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
const findItem = function (array, element, option = {}) {
  if (!Array.isArray(array)) throw new TypeError('array must be a array');
  if (option && option.constructor !== Object) throw new TypeError('option must be a object');
  const {equalValue = true} = option;
  if (equalValue) {
    return array.findIndex(elem => {
      return equal(elem, element);
    });
  } else {
    return array.findIndex(elem => {
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
const uniqueItem = function (array, option = {}) {
  if (!Array.isArray(array)) throw new TypeError('array must be a array');
  if (option && option.constructor !== Object) throw new TypeError('option must be a object');
  const {equalValue = true} = option, arrLen = array.length;
  if (equalValue) {
    for (let i = 0; i < arrLen - 1; i++) {
      for (let j = i + 1; j < arrLen; j++) {
        if (equal(array[i], array[j])) {
          return false;
        }
      }
    }
  } else {
    for (let i = 0; i < arrLen - 1; i++) {
      for (let j = i + 1; j < arrLen; j++) {
        if (array[i] === array[j]) {
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
const copy = function (array, element, option = {}) {
  if (!Array.isArray(array)) throw new TypeError('array must be a array');
  if (!option || option.constructor !== Object) throw new TypeError('option must be a object');
  const {index, multi, unique = false, uniqueValue = false, filter, deep = false} = option;
  let es;
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
  const len = es.length;
  if (len > 0) {
    let hasSame;
    if (uniqueValue) {
      hasSame = (arg) => {
        return array.findIndex(elem => {
          return equal(elem, arg);
        }) !== -1;
      };
    } else if (unique) {
      hasSame = (arg) => {
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
const util = {
  copy, findItem, uniqueItem
};
module.exports = util;
