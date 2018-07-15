const expect = require('chai').expect;
const util = require('../../build/dev/nebjs-util'); // const util = require('../../lib/index');
describe('util.string 【字符串操作】测试', function () {
  describe('util.string.trim 清空两端空格测试', function () {
    it('trim两端：trim("  abc  ") 的等于abc', function () {
      expect(util.string.trim('  abc  ')).to.equal('abc');
    });
    it('trimLeft左端：trim("  abc  ") 的等于abc  ', function () {
      expect(util.string.trimLeft('  abc  ')).to.equal('abc  ');
    });
    it('trimRight右端：trim("  abc  ") 的等于  abc', function () {
      expect(util.string.trimRight('  abc  ')).to.equal('  abc');
    });
  });
  describe('util.string.escape 转义字符转义测试', function () {
    it('escape换行符：escape("\\n\\t\\r\\f") 的等于ntr\\u000f', function () {
      expect(util.string.escape("\\n\\t\\r\\f")).to.equal('ntr\u000f');
    });
  });
});
