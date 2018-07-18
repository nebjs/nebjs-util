const replaceReg = /(yyyy|yy|MM?|dd?|HH?|ss?|mm?)/g,
  stringToDateRegs = {
    "yyyy": [{num: 4, reg: /yyyy/}, {num: 2, reg: /yy/}],
    "MM": [{num: 2, reg: /MM/}, {num: 1, reg: /M/}],
    "dd": [{num: 2, reg: /dd/}, {num: 1, reg: /d/}],
    "HH": [{num: 2, reg: /HH/}, {num: 1, reg: /H/}],
    "mm": [{num: 2, reg: /mm/}, {num: 1, reg: /m/}],
    "ss": [{num: 2, reg: /ss/}, {num: 1, reg: /s/}]
  },
  hrReg = /-/g;
/**
 * 从日期/时间获取格式化字符串
 * @param date {Date}
 * @param format {String} 格式化format "yyyy-MM-dd HH:mm:ss"
 * @returns {String}
 */
const toFormatString = function (date, format) {
  if (!date) return "";
  format = format || "yyyy-MM-dd HH:mm:ss";
  date = new Date(date);
  if (!(date instanceof Date)) return "";
  const dict = {
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
const fromFormatString = function (dateStr, format) {
  if (format) {
    if (dateStr.length < format.length) {
      return null;
    }
    const date = {"yyyy": 0, "MM": 0, "dd": 0, "HH": 0, "mm": 0, "ss": 0};
    let attr, testRegs, index, i, testLen, num;
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
const util = {toFormatString, fromFormatString};
module.exports = util;
