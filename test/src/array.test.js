const expect = require('chai').expect;
const util = require('../../build/dev/nebjs-util'); // const util = require('../../lib/index');
describe('util.array 【数组操作】测试', function () {
  describe('util.array.copy 【数组拷贝】测试', function () {
    describe('单多插入：指定插入的元素类型', function () {
      it('数组插入：copy(["a", "b", "c"], [0, 1, 2]) 的JSON字符串等于"["a","b","c",[0,1,2]]"', function () {
        expect(JSON.stringify(util.array.copy(["a", "b", "c"], [0, 1, 2]))).to.equal('["a","b","c",[0,1,2]]');
      });
      it('批量插入：copy(["a", "b", "c"], [0, 1, 2], {multi: true}) 的JSON字符串等于"["a","b","c",0,1,2]', function () {
        expect(JSON.stringify(util.array.copy(["a", "b", "c"], [0, 1, 2], {multi: true}))).to.equal('["a","b","c",0,1,2]');
      });
      it('多数组插入：copy(["a", "b", "c"], [[0, 1, 2], [3, 4, 5]], {multi: true}) 的JSON字符串等于"["a","b","c",[0,1,2],[3,4,5]]"', function () {
        expect(JSON.stringify(util.array.copy(["a", "b", "c"], [[0, 1, 2], [3, 4, 5]], {multi: true}))).to.equal('["a","b","c",[0,1,2],[3,4,5]]');
      });
    });
    describe('位置插入：指定插入的位置', function () {
      it('最后插入：copy(["a", "b", "c"], "d") 的序列化结果等于"a,b,c,d"', function () {
        expect(util.array.copy(["a", "b", "c"], "d").toString()).to.equal('a,b,c,d');
      });
      it('最后插入：copy(["a", "b", "c"], "0", {index: 0}) 的序列化结果等于"0,a,b,c"', function () {
        expect(util.array.copy(["a", "b", "c"], "0", {index: 0}).toString()).to.equal('0,a,b,c');
      });
      it('最后插入：copy(["a", "b", "c"], [0, 1, 2], {index: 0, multi: true}) 的序列化结果等于"0,1,2,a,b,c"', function () {
        expect(util.array.copy(["a", "b", "c"], [0, 1, 2], {index: 0, multi: true}).toString()).to.equal('0,1,2,a,b,c');
      });
    });
    describe('唯一拷贝：唯一性限制，已经存在的元素不会拷贝', function () {
      it('重复压入：copy(["a"], "a") 的序列化结果等于"a,a"', function () {
        expect(util.array.copy(['a'], 'a').toString()).to.equal('a,a');
      });
      it('重复压入：copy(["a"], "a", {unique: true}) 的序列化结果等于"a"', function () {
        expect(util.array.copy(['a'], 'a', {unique: true}).toString()).to.equal('a');
      });
      it('批量压入：copy(["a"], ["a", "b", "c"], {unique: true, multi: true}) 的序列化结果等于"a,b,c"', function () {
        expect(util.array.copy(['a'], ['a', 'b', 'c'], {unique: true, multi: true}).toString()).to.equal('a,b,c');
      });
    });
    describe('条件拷贝：唯一性限制，已经存在的元素不会拷贝', function () {
      it('条件压入：copy([], [{name: "a"}, {name: "b"}], {multi: true, filter(arr, es, e, index) {return e.name === "a";}}) 的JSON字符串等于"[{"name":"a"}]"', function () {
        expect(JSON.stringify(util.array.copy([], [{name: "a"}, {name: "b"}], {
          multi: true, filter(arr, es, e, index) {
            return e.name === 'a';
          }
        }))).to.equal('[{"name":"a"}]');
      });
      it('条件压入：copy([{name: "a"}, {name: "b"}], {multi: true, filter(arr, es, e, index) {return arr.findIndex(elem=>{return elem.name===e.name;})===-1;}}) 的JSON字符串等于"[{"name":"a"},{"name":"b"}]"', function () {
        expect(JSON.stringify(util.array.copy([], [{name: "a"}, {name: "a"}, {name: "a"}, {name: "b"}], {
          multi: true, filter(arr, es, e, index) {
            return arr.findIndex(elem => {
              return elem.name === e.name;
            }) === -1;
          }
        }))).to.equal('[{"name":"a"},{"name":"b"}]');
      });
    });
  });
  describe('util.array.findItem 【数组项查找】测试', function () {
    it('无结果：findItem(["a", "b", "c"], "d") === -1', function () {
      expect(util.array.findItem(['a', 'b', 'd'], 'c')).to.equal(-1);
    });
    it('有结果：findItem(["a", "b", "c"], "c") === 2', function () {
      expect(util.array.findItem(['a', 'b', 'c'], 'c')).to.equal(2);
    });
    it('有结果：findItem(["a", "b", {"a": "b", "b": "c"}], {"b": "c", "a": "b"}) === 2', function () {
      expect(util.array.findItem(['a', 'b', {'a': 'b', 'b': 'c'}], {'b': 'c', 'a': 'b'})).to.equal(2);
    });
  });
  describe('util.array.findItem 【数组无重复项】测试', function () {
    it('有重复项：uniqueItem(["a", "b", "c", "c"]) === false', function () {
      expect(util.array.uniqueItem(['a', 'b', 'c', 'c'])).to.equal(false);
    });
    it('无重复项：uniqueItem(["a", "b", "c", "d"]) === true', function () {
      expect(util.array.uniqueItem(['a', 'b', 'c', 'd'])).to.equal(true);
    });
    it('有重复项：uniqueItem(["a", "b", "c", {}, {}]) === false', function () {
      expect(util.array.uniqueItem(['a', 'b', 'c', {}, {}])).to.equal(false);
    });
    it('有重复项：uniqueItem(["a", "b", "c", {"a": "b", "b": "c"}, {"b": "c", "a": "b"}]) === false', function () {
      expect(util.array.uniqueItem(['a', 'b', 'c', {'a': 'b', 'b': 'c'}, {'b': 'c', 'a': 'b'}])).to.equal(false);
    });
  });
});
