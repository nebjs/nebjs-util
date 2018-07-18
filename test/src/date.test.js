const expect = require('chai').expect;
const util = require('../../build/dev/nebjs-util'); // const util = require('../../lib/index');
describe('util.date 【日期/时间操作】测试', function () {
  describe('util.date.toFormatString 从日期/时间获取格式化字符串测试', function () {
    it('toFormatString(new Date("2018-07-18 16:36:49"))==="2018-07-18 16:36:49"', function () {
      expect(util.date.toFormatString(new Date('2018-07-18 16:36:49'))).to.equal('2018-07-18 16:36:49');
    });
    it('toFormatString(new Date("2018-07-18 16:36:49"), "yyyy-MM-dd")==="2018-07-18"', function () {
      expect(util.date.toFormatString(new Date('2018-07-18 16:36:49'), "yyyy-MM-dd")).to.equal('2018-07-18');
    });
    it('toFormatString(new Date("2018-07-18 16:36:49"), "yyyy年MM月dd日")==="2018年07月18日"', function () {
      expect(util.date.toFormatString(new Date('2018-07-18 16:36:49'), "yyyy年MM月dd日")).to.equal('2018年07月18日');
    });
    it('toFormatString(new Date("2018-07-18 16:36:49"), "HH:mm:ss")==="16:36:49"', function () {
      expect(util.date.toFormatString(new Date('2018-07-18 16:36:49'), "HH:mm:ss")).to.equal('16:36:49');
    });
  });
  describe('util.date.fromFormatString 从格式化字符串获取日期/时间测试', function () {
    it('fromFormatString("2018-07-18 16:36:49").getTime()===new Date("2018-07-18 16:36:49").getTime()', function () {
      expect(util.date.fromFormatString('2018-07-18 16:36:49').getTime()).to.equal(new Date('2018-07-18 16:36:49').getTime());
    });
    it('fromFormatString("2018年07月18日 16:36:49", "yyyy年MM月dd日 HH:mm:ss").getTime()===new Date("2018-07-18 16:36:49").getTime()', function () {
      expect(util.date.fromFormatString('2018年07月18日 16:36:49', 'yyyy年MM月dd日 HH:mm:ss').getTime()).to.equal(new Date('2018-07-18 16:36:49').getTime());
    });
  });
});
