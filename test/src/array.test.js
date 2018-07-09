const chai = require('chai');
const util = require('../../lib/index');
chai.should();
describe('util.array 【数组操作】测试', function () {
  describe('util.array.uniquePush 【唯一压入】测试', function () {
    it('重复压入：uniquePush(["a"], "a") 的序列化结果等于"a"', function () {
      util.array.uniquePush(['a'], 'a').toString().should.equal('a');
    });
    it('批量压入：uniquePush(["a"], "a", "b", "c") 的序列化结果等于"a,b,c"', function () {
      util.array.uniquePush(['a'], 'a', 'b', 'c').toString().should.equal('a,b,c');
    });
  });
});
