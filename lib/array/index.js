/**
 * 条件压入
 * @param array
 * @param elem
 * @param filter
 */
const filterPush = function (array, elem, filter) {
  if (!filter || typeof filter !== 'function') {
    throw TypeError('filter must be a function');
  }

};
/**
 * 唯一压入
 * @param array
 */
const uniquePush = function (array) {
  const args = Array.prototype.slice.call(arguments, 1);
  for (const arg of args) {
    const index = array.findIndex((elem) => {
      return elem === arg;
    });
    if (index === -1) {
      array.push(arg);
    }
  }
  return array;
};
const util = {
  filterPush,
  uniquePush,
};
module.exports = util;
