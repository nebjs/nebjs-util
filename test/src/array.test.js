const chai = require('chai');
const util = require('../../lib/index');
chai.should();
describe('util.array 【数组操作】测试', function () {
  describe('util.array.copy 【数组拷贝】测试', function () {
    describe('单多插入：指定插入的元素类型', function () {
      it('数组插入：copy(["a", "b", "c"], [0, 1, 2]) 的JSON字符串等于"["a","b","c",[0,1,2]]"', function () {
        JSON.stringify(util.array.copy(["a", "b", "c"], [0, 1, 2])).should.equal('["a","b","c",[0,1,2]]');
      });
      it('批量插入：copy(["a", "b", "c"], [0, 1, 2], {multi: true}) 的JSON字符串等于"["a","b","c",0,1,2]', function () {
        JSON.stringify(util.array.copy(["a", "b", "c"], [0, 1, 2], {multi: true})).should.equal('["a","b","c",0,1,2]');
      });
      it('多数组插入：copy(["a", "b", "c"], [[0, 1, 2], [3, 4, 5]], {multi: true}) 的JSON字符串等于"["a","b","c",[0,1,2],[3,4,5]]"', function () {
        JSON.stringify(util.array.copy(["a", "b", "c"], [[0, 1, 2], [3, 4, 5]], {multi: true})).should.equal('["a","b","c",[0,1,2],[3,4,5]]');
      });
    });
    describe('位置插入：指定插入的位置', function () {
      it('最后插入：copy(["a", "b", "c"], "d") 的序列化结果等于"a,b,c,d"', function () {
        util.array.copy(["a", "b", "c"], "d").toString().should.equal('a,b,c,d');
      });
      it('最后插入：copy(["a", "b", "c"], "0", {index: 0}) 的序列化结果等于"0,a,b,c"', function () {
        util.array.copy(["a", "b", "c"], "0", {index: 0}).toString().should.equal('0,a,b,c');
      });
      it('最后插入：copy(["a", "b", "c"], [0, 1, 2], {index: 0, multi: true}) 的序列化结果等于"0,1,2,a,b,c"', function () {
        util.array.copy(["a", "b", "c"], [0, 1, 2], {index: 0, multi: true}).toString().should.equal('0,1,2,a,b,c');
      });
    });
    describe('唯一拷贝：唯一性限制，已经存在的元素不会拷贝', function () {
      it('重复压入：copy(["a"], "a") 的序列化结果等于"a,a"', function () {
        util.array.copy(['a'], 'a').toString().should.equal('a,a');
      });
      it('重复压入：copy(["a"], "a", {unique: true}) 的序列化结果等于"a"', function () {
        util.array.copy(['a'], 'a', {unique: true}).toString().should.equal('a');
      });
      it('批量压入：copy(["a"], ["a", "b", "c"], {unique: true, multi: true}) 的序列化结果等于"a,b,c"', function () {
        util.array.copy(['a'], ['a', 'b', 'c'], {unique: true, multi: true}).toString().should.equal('a,b,c');
      });
    });
    describe('条件拷贝：唯一性限制，已经存在的元素不会拷贝', function () {
      it('条件压入：copy([], [{name: "a"}, {name: "b"}], {multi: true, filter(arr, es, e, index) {return e.name === "a";}}) 的JSON字符串等于"[{"name":"a"}]"', function () {
        JSON.stringify(util.array.copy([], [{name: "a"}, {name: "b"}], {
          multi: true, filter(arr, es, e, index) {
            return e.name === 'a';
          }
        })).should.equal('[{"name":"a"}]');
      });
      it('条件压入：copy([{name: "a"}, {name: "b"}], {multi: true, filter(arr, es, e, index) {return arr.findIndex(elem=>{return elem.name===e.name;})===-1;}}) 的JSON字符串等于"[{"name":"a"},{"name":"b"}]"', function () {
        JSON.stringify(util.array.copy([], [{name: "a"}, {name: "a"}, {name: "a"}, {name: "b"}], {
          multi: true, filter(arr, es, e, index) {
            return arr.findIndex(elem=>{return elem.name===e.name;})===-1;
          }
        })).should.equal('[{"name":"a"},{"name":"b"}]');
      });
    });
  });

  /*describe('util.array.copy 【数组拷贝】测试', function () {
    it('位置插入：指定插入的位置', function () {
      // 参数三：option.index，未指定时在最后，为0时为首...
    });
    it('数组插入：指定插入的是多元素的数组', function () {
      // 参数三：option.multi，为真时，参数二是个数组...
    });
    it('唯一插入：唯一性限制，已经存在的元素不会拷贝', function () {
      // 参数三：option.unique=true，默认false
    });
    it('条件插入：指定插入的条件', function () {
      // 参数三：option.filter 指定过滤器：filter(arr, es, e, index)
      // 返回false或其他非真对象代表过滤掉
      // 返回true代表直接插入
      // 返回{value: }可特殊处理，比如实现复杂的拷贝等操作
    });
    it('深拷贝插入：深拷贝模式，所有新拷贝的元素都是全新的副本（方法或类除外）', function () {
      // 参数三：option.deep=true，默认false
    });
  });*/
});
