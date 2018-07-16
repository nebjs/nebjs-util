const expect = require('chai').expect;
const util = require('../../build/dev/nebjs-util'); // const util = require('../../lib/index');
describe('util.common 【common操作】测试', function () {
  describe('util.common.clone 【克隆/拷贝】测试', function () {
    it('克隆副本，克隆普通类型值，克隆的值与源对象值相等', function () {
      const a = 1, b = util.common.clone(a);
      expect(a).to.equal(b);
    });
    it('克隆副本，克隆的对象与源对象并非同一个对象', function () {
      const a = {a: {b: "c"}, b: ["a"]}, b = util.common.clone(a);
      expect(a).to.not.equal(b);
    });
    it('克隆副本，克隆的对象与源对象的JSON字符串相等', function () {
      const a = {a: {b: "c"}, b: ["a"]}, b = util.common.clone(a);
      expect(JSON.stringify(a)).to.equal(JSON.stringify(b));
    });
  });
  describe('util.common.equal 【深度值相等】测试', function () {
    it('普通值类型对象的值对比：1!==2 2===2 "abc"!=="ab" "abc"==="abc" ["abc"]!==["abc", "ab"] ["abc"]===["abc"]', function () {
      expect(util.common.equal(1, 2)).to.equal(false);
      expect(util.common.equal(2, 2)).to.equal(true);
      expect(util.common.equal('abc', 'ab')).to.equal(false);
      expect(util.common.equal('abc', 'abc')).to.equal(true);
      expect(util.common.equal(['abc'], ['abc', 'ab'])).to.equal(false);
      expect(util.common.equal(['abc'], ['abc'])).to.equal(true);
      expect(util.common.equal([], [])).to.equal(true);
      expect(util.common.equal({}, {})).to.equal(true);
    });
    it('引用类型对象的值对比：{a: {b: "c"}, b: ["a"]} 值等于另一个 {a: {b: "c"}, b: ["a"]}', function () {
      const x = {a: {b: "c"}, b: ["a"]}, y = {a: {b: "c"}, b: ["a"]}, z = {a: {b: "c"}, b: ["a", "b"]};
      expect(util.common.equal(x, y)).to.equal(true);
      expect(x === y).to.equal(false);
      expect(util.common.equal(x, z)).to.equal(false);
    });
  });
});
