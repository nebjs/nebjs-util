const chai = require('chai');
const util = require('../../lib/index');
chai.should();
describe('util.string 【字符串操作】测试', function () {
  describe('util.string.trim 清空两端空格测试', function () {
    it('trim两端：trim("  abc  ") 的等于abc', function () {
      util.string.trim('  abc  ').should.equal('abc');
    });
    it('trimLeft左端：trim("  abc  ") 的等于abc  ', function () {
      util.string.trimLeft('  abc  ').should.equal('abc  ');
    });
    it('trimRight右端：trim("  abc  ") 的等于  abc', function () {
      util.string.trimRight('  abc  ').should.equal('  abc');
    });
  });
  describe('util.string.escape 转义字符转义测试', function () {
    it('escape换行符：escape("\\n\\t\\r\\f") 的等于ntr\\u000f', function () {
      util.string.escape("\\n\\t\\r\\f").should.equal('ntr\u000f');
    });
  });
});
