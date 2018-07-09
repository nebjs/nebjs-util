const hasOwnProperty = Object.prototype.hasOwnProperty;
const isObject = function (x) {
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
      if (!isObject(fromElem) /*|| !hasOwnProperty.call(from, fromName)*/) {
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
        if (!mergeObject || !isObject(toElem)) {
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
const common = {hasOwnProperty, isObject, assignKey, cloneValue};
module.exports = common;
