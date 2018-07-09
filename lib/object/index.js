const hasOwnProperty = Object.prototype.hasOwnProperty;
const isObj = function (x) {
  return x !== null && x !== undefined && (typeof x === 'object');
};
const assignKey = function (to, from, fromName, toName = fromName, mergeObject, mergeArray) {
  // 创建一个栈，并在栈顶放入默认的要处理的所有参数（压栈）
  const stack = [{to, from, fromName, toName}];
  while (stack.length > 0) {
    // 当前操作栈（参数），从栈顶取出的参数
    const arg = stack.pop(), {to, from, fromName, toName} = arg, fromElem = from[fromName];
    let toElem = to[toName];
    if (fromElem !== toElem) {
      if (!isObj(fromElem) /*|| !hasOwnProperty.call(from, fromName)*/) {
        to[toName] = fromElem;
      } else if (Array.isArray(fromElem)) {
        const len = fromElem.length;
        if (!mergeArray || !Array.isArray(toElem)) {
          toElem = to[toName] = [];
        }
        const toLen = toElem.length;
        for (let i = len - 1; i >= 0; --i) {
          stack.push({to: toElem, from: fromElem, fromName: i, toName: i + toLen});
        }
      } else {
        if (!mergeObject || !isObj(toElem)) {
          toElem = to[toName] = {};
        }
        for (const name in fromElem) {
          if (hasOwnProperty.call(fromElem, name)) {
            stack.push({to: toElem, from: fromElem, fromName: name, toName: name});
          }
        }
      }
    }
  }
};
/**
 * 清空对象
 * @param obj
 */
const clear = function (obj) {
  if (obj === null || obj === undefined) {
    throw new TypeError('target cannot be null or undefined');
  }
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
 * @param option 配置
 * omit {String|Array|Function} : 要删除的属性，不会再触发后面的过滤器
 * filter {Function} 过滤器：Function(key, src, target)，过滤掉不合条件的属性（优先级最低），过滤器的this指向源对象src
 *    返回值为false的被过滤掉..
 *    当返回值是非false时，不过滤数据，且返回值是非空字符串时，返回值作为【目标对象属性名称】（更名拷贝）
 * mergeObject {Boolean} 合并对象 默认真
 * mergeArray {Boolean} 合并数组 默认真
 * @return {*}
 */
const copy = function (to, from, option = {}) {
  let {omit, filter, mergeObject = true, mergeArray = true} = option;
  if (omit) {
    if (typeof omit === 'string') {
      omit = [omit];
    }
    if (omit.length === 0) omit = null;
  }
  if (filter && typeof filter !== 'function') filter = null;
  if (omit || filter) {
    for (const key in from) {
      if (hasOwnProperty.call(from, key)) {
        if (!omit || omit.indexOf(key) === -1) {
          if (filter) {
            let name = null;
            const back = filter.call(from, key, from, to);
            if (back !== false) {
              name = (back && typeof back === 'string') ? back : key;
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
 * @param option 配置 {Object}
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
  let {pick, filter, mergeObject = true, mergeArray = true} = option;
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
  if (filter && typeof filter !== 'function') filter = null;
  for (const key of pick) {
    if (hasOwnProperty.call(from, key)) {
      if (filter) {
        let name = null;
        const back = filter.call(from, key, from, to);
        if (back !== false) {
          name = (back && typeof back === 'string') ? back : key;
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
  clear, copy, pick,
};
module.exports = util;
