const expect = require('chai').expect;
const util = require('../../build/dev/nebjs-util'); // const util = require('../../lib/index');
describe('util.object 【对象操作】测试', function () {
  describe('util.object.clear 【清空对象属性】测试', function () {
    it('clear对象：clear({a: 123, b: 456}) 的串行化结果等于{}', function () {
      expect(JSON.stringify(util.object.clear({a: 123, b: 456}))).to.equal('{}');
    });
  });
  describe('util.object.copy 【单拷贝对象】测试', function () {
    it('叠加新对象：copy({}, {a: 123, b: 456}) 的串行化结果等于{"a":123,"b":456}', function () {
      expect(JSON.stringify(util.object.copy({}, {a: 123, b: 456}))).to.equal('{"a":123,"b":456}');
    });
    it('叠加至对象：copy({a: 123, b: 456}, {c: 789, d: "abc"}) 的串行化结果等于{"a":123,"b":456,"c":789,"d":"abc"}', function () {
      expect(JSON.stringify(util.object.copy({a: 123, b: 456}, {c: 789, d: "abc"}))).to.equal('{"a":123,"b":456,"c":789,"d":"abc"}');
    });
    it('删除至对象：copy({a: 123, b: 456}, {c: 789, d: "abc"}, {omit: ["c"]}) 的串行化结果等于{"a":123,"b":456,"d":"abc"}', function () {
      expect(JSON.stringify(util.object.copy({a: 123, b: 456}, {c: 789, d: "abc"}, {omit: ["c"]}))).to.equal('{"a":123,"b":456,"d":"abc"}');
    });
    it('过滤至对象：copy({a: 123, b: 456}, {c: 789, d: "abc"}, {filter(key, src, target){return key!=="c";}}) 的串行化结果等于{"a":123,"b":456,"d":"abc"}', function () {
      expect(JSON.stringify(util.object.copy({a: 123, b: 456}, {c: 789, d: "abc"}, {
        filter(key/*, src, target*/) {
          return key !== "c";
        }
      }))).to.equal('{"a":123,"b":456,"d":"abc"}');
    });
    it('别名至对象：copy({a: 123, b: 456}, {c: 789, d: "abc"}, {filter(key, src, target){return key==="c"?"aliasC":false;}}) 的串行化结果等于{"a":123,"b":456,"aliasC":789}', function () {
      expect(JSON.stringify(util.object.copy({a: 123, b: 456}, {c: 789, d: "abc"}, {
        filter(key/*, src, target*/) {
          return key === "c" ? "aliasC" : false;
        }
      }))).to.equal('{"a":123,"b":456,"aliasC":789}');
    });
  });
  describe('util.object.copy 【拷贝对象副本】测试', function () {
    it('不是源对象：copy({a: 1}, {b: 2}) 的结果对象是源对象的副本', function () {
      const to = {a: 1}, src = {b: 2};
      const obj = util.object.copy(to, src);
      expect(obj).to.not.equal(src);
    });
    it('新副本对象：copy({a: 1}, {b: 2}) !== copy({a: 1}, {b: 2})', function () {
      expect(util.object.copy({a: 1}, {b: 2})).to.not.equal(util.object.copy({a: 1}, {b: 2}));
    });
    it('不变源对象：copy({a: 1}, {b: 2}) 的源对象的串行化结果等于{a:1}', function () {
      const to = {a: 1}, src = {b: 2};
      util.object.copy(to, src);
      expect(JSON.stringify(to)).to.not.equal('{a:1}');
    });
  });
  describe('util.object.copy 【深拷贝对象】测试', function () {
    it('叠加模式深拷贝对象：copy({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {deep: true}) 的串行化结果等于{"a":{"b":"c","d":"e"},"b":["a","b"]}', function () {
      expect(JSON.stringify(util.object.copy({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {deep: true}))).to.equal('{"a":{"b":"c","d":"e"},"b":["a","b"]}');
    });
    it('替换模式深拷贝对象：copy({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {deep: true, mergeObject: false, mergeArray: false}) 的串行化结果等于{"a":{"d":"e"},"b":["b"]}', function () {
      expect(JSON.stringify(util.object.copy({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {deep: true, mergeObject: false, mergeArray: false}))).to.equal('{"a":{"d":"e"},"b":["b"]}');
    });
    it('非引用深拷贝对象：copy({}, {a: {b: "c"}}, {deep: true}).a 不等于 copy({}, {a: {b: "c"}}, {deep: true}).a', function () {
      expect(util.object.copy({}, {a: {b: "c"}}, {deep: true}).a).to.not.equal(util.object.copy({}, {a: {b: "c"}}, {deep: true}).a);
    });
    it('值相等深拷贝对象：copy({}, {a: {b: "c"}}, {deep: true}).a.b 等于 copy({}, {a: {b: "c"}}, {deep: true}).a.b', function () {
      expect(util.object.copy({}, {a: {b: "c"}}, {deep: true}).a.b).to.equal(util.object.copy({}, {a: {b: "c"}}, {deep: true}).a.b);
    });
  });
  describe('util.object.pick 【选择单拷贝对象】测试', function () {
    it('无操作对象：pick({}, {a: 123, b: 456}) 的串行化结果等于{}', function () {
      expect(JSON.stringify(util.object.pick({}, {a: 123, b: 456}))).to.equal('{}');
    });
    it('选择至对象：pick({a: 123, b: 456}, {c: 789, d: "abc"}, {pick: ["c"]}}) 的串行化结果等于{"a":123,"b":456,"c":789}', function () {
      expect(JSON.stringify(util.object.pick({a: 123, b: 456}, {c: 789, d: "abc"}, {pick: ["c"]}))).to.equal('{"a":123,"b":456,"c":789}');
    });
    it('过滤至对象：pick({a: 123, b: 456}, {c: 789, d: "abc"}, {pick: ["c"], filter(key, src, target){return key!=="c";}}) 的串行化结果等于{"a":123,"b":456}', function () {
      expect(JSON.stringify(util.object.pick({a: 123, b: 456}, {c: 789, d: "abc"}, {
        pick: ["c"], filter(key/*, src, target*/) {
          return key !== "c";
        }
      }))).to.equal('{"a":123,"b":456}');
    });
    it('别名至对象：pick({a: 123, b: 456}, {c: 789, d: "abc"}, {pick: ["c"], filter(key, src, target){return key==="c"?"aliasC":false;}}) 的串行化结果等于{"a":123,"b":456,"aliasC":789}', function () {
      expect(JSON.stringify(util.object.pick({a: 123, b: 456}, {c: 789, d: "abc"}, {
        pick: ["c"], filter(key/*, src, target*/) {
          return key === "c" ? "aliasC" : false;
        }
      }))).to.equal('{"a":123,"b":456,"aliasC":789}');
    });
  });
  describe('util.object.pick 【选择拷贝对象副本】测试', function () {
    it('不是源对象：pick({a: 1}, {b: 2}) 的结果对象是源对象的副本', function () {
      const to = {a: 1}, src = {b: 2};
      const obj = util.object.pick(to, src);
      expect(obj).to.not.equal(src);
    });
    it('新副本对象：pick({a: 1}, {b: 2}, {pick: ["b"]}) !== pick({a: 1}, {b: 2}, {pick: ["b"]})', function () {
      expect(util.object.pick({a: 1}, {b: 2}, {pick: ["b"]})).to.not.equal(util.object.pick({a: 1}, {b: 2}, {pick: ["b"]}));
    });
    it('不变源对象：pick({a: 1}, {b: 2}, {pick: ["b"]}) 的源对象的串行化结果等于{a:1}', function () {
      const to = {a: 1}, src = {b: 2};
      util.object.pick(to, src, {pick: ["b"]});
      expect(JSON.stringify(to)).to.not.equal('{a:1}');
    });
  });
  describe('util.object.pick 【选择深拷贝对象】测试', function () {
    it('叠加模式深拷贝对象：pick({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {deep: true, pick: ["a", "b"]}) 的串行化结果等于{"a":{"b":"c","d":"e"},"b":["a","b"]}', function () {
      expect(JSON.stringify(util.object.pick({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {deep: true, pick: ["a", "b"]}))).to.equal('{"a":{"b":"c","d":"e"},"b":["a","b"]}');
    });
    it('替换模式深拷贝对象：pick({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {deep: true, pick: ["a", "b"], mergeObject: false, mergeArray: false}) 的串行化结果等于{"a":{"d":"e"},"b":["b"]}', function () {
      expect(JSON.stringify(util.object.pick({a: {b: "c"}, b: ["a"]}, {a: {d: "e"}, b: ["b"]}, {deep: true, pick: ["a", "b"], mergeObject: false, mergeArray: false}))).to.equal('{"a":{"d":"e"},"b":["b"]}');
    });
    it('非引用深拷贝对象：pick({}, {a: {b: "c"}}, {deep: true, pick: ["a"]}).a 不等于 pick({}, {a: {b: "c"}}, {deep: true, pick: ["a"]}).a', function () {
      expect(util.object.pick({}, {a: {b: "c"}}, {deep: true, pick: ["a"]}).a).to.not.equal(util.object.pick({}, {a: {b: "c"}}, {pick: ["a"]}).a);
    });
    it('值相等深拷贝对象：pick({}, {a: {b: "c"}}, {deep: true, pick: ["a"]}).a.b 等于 pick({}, {a: {b: "c"}}, {deep: true, pick: ["a"]}).a.b', function () {
      expect(util.object.pick({}, {a: {b: "c"}}, {deep: true, pick: ["a"]}).a.b).to.equal(util.object.pick({}, {a: {b: "c"}}, {deep: true, pick: ["a"]}).a.b);
    });
  });
});
