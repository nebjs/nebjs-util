/**
 * 对比两个对象是否相等
 * @param x
 * @param y
 * @returns {Boolean}
 */
const equal = function (x, y) {
  if (arguments.length < 2) throw new TypeError('this method need two argument');
  // 创建一个栈，并在栈顶放入默认的要处理的所有参数（压栈）
  const stack = [{x, y}];
  while (stack.length > 0) {
    const {x, y} = stack.pop(), tpx = typeof x, tpy = typeof y;
    if (isNaN(x) && isNaN(y) && tpx === 'number' && tpy === 'number') return true;// 都是NaN时
    if (x === y) return true;// 值相等或引用相等
    if (tpx !== tpy || x.constructor !== y.constructor) return false;// 基础或引用类型不同
    if ((x instanceof Date && y instanceof Date) || (x instanceof RegExp && y instanceof RegExp)) return x.toString() === y.toString();
    if (!(x instanceof Object && y instanceof Object)) return false;
    if (Array.isArray(x)) {
      if (x.length !== y.length) return false;
      for (const p in y) {
        stack.push({x: x[p], y: y[p]});
      }
    } else {
      if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) return false;
      for (const p in y) {
        const h = y.hasOwnProperty(p);
        if (h !== x.hasOwnProperty(p)) return false;
        if (h) {
          stack.push({x: x[p], y: y[p]});
        }
      }
      for (const p in x) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) return false;
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
const deepAssign = function (to, from, fromName, toName = fromName, mergeObject, mergeArray) {
  // 创建一个栈，并在栈顶放入默认的要处理的所有参数（压栈）
  const stack = [{to, from, fromName, toName}];
  while (stack.length > 0) {
    // 当前操作栈（参数），从栈顶取出的参数
    const arg = stack.pop(), {to, from, fromName, toName} = arg, fromElem = from[fromName];
    let toElem = to[toName];
    if (fromElem !== toElem) {
      if (!(fromElem && typeof fromElem === 'object')) {
        to[toName] = fromElem;
      } else if (Array.isArray(fromElem)) {
        const len = fromElem.length;
        if (!mergeArray || !Array.isArray(toElem)) toElem = to[toName] = [];
        const toLen = toElem.length;
        for (let i = len - 1; i >= 0; --i) {
          stack.push({to: toElem, from: fromElem, fromName: i, toName: i + toLen});
        }
      } else {
        if (!mergeObject || !(toElem && typeof toElem === 'object' && !Array.isArray(toElem))) toElem = to[toName] = {};
        for (const name in fromElem) {
          if (fromElem.hasOwnProperty(name)) stack.push({to: toElem, from: fromElem, fromName: name, toName: name});
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
const clone = function (src) {
  if (src && !(src instanceof Date) && !(src instanceof Error) && !(src instanceof RegExp)) {
    const tp = typeof src;
    if (tp === 'string') {
      src = src.slice();
    } else if (tp !== 'function' && tp !== 'boolean' && tp !== 'number' && tp !== 'symbol') {
      let to;
      if (Array.isArray(src)) {
        to = [];
      } else if (src.constructor === Object) {
        to = {};
      } else {
        to = new src.constructor();
      }
      for (const key in src) {
        if (src.hasOwnProperty(key)) {
          deepAssign(to, src, key, key);
        }
      }
      src = to;
    }
  }
  return src;
};
const common = {deepAssign, clone, equal};
module.exports = common;
