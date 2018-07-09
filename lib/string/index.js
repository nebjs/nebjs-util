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
    escape: new RegExp('' + escapeReplace, 'g'),
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
  return (sub < 0)/* 65536*/ ? String.fromCharCode(code) : String.fromCharCode(sub >> 10 | 0xD800, sub & 0x3FF | 0xDC00);
};
const util = {
  /**
   * 截取字符串两端空白符
   * @param str
   * @returns {*}
   */
  trim(str) {
    return str.replace(reg.trim, '');
  },
  /**
   * 截取字符串左端空白符
   * @param str
   * @returns {*}
   */
  trimLeft(str) {
    return str.replace(reg.trimLeft, '');
  },
  /**
   * 截取字符串右端空白符
   * @param str
   * @returns {*}
   */
  trimRight(str) {
    return str.replace(reg.trimRight, '');
  },
  /**
   * 对字符串中的转义字符进行转义
   * @param code
   * @returns {*}
   */
  escape(code) {
    return (code.length > 0) ? code.replace(reg.escape, escapeReplaceFun) : code;
  },
};
module.exports = util;
