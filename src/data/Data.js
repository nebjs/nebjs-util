/**
 * Data类
 */
class Data {
  constructor() {
    this.info = {};
    this.list = [];
  }

  /**
   * 设置数据
   * @param name
   * @param value
   */
  setData(name, value) {
    if (!(name && typeof name === 'string' && name.length > 0)) throw new TypeError('name must be a non-empty string');
    const {info, list} = this, dt = {name, index: list.length, value: value};
    info[name] = dt;
    list.push(dt);
    return dt;
  }

  /**
   * 通过name获取数据
   * @param name
   */
  getData(name) {
    if (!(name && typeof name === 'string' && name.length > 0)) throw new TypeError('name must be a non-empty string');
    return this.info[name];
  }

  /**
   * 通过index获取数据
   * @param index
   */
  getDataByIndex(index) {
    if (!(index && typeof index === 'number' && index >= 0)) throw new TypeError('index must be a non-negative integer');
    return this.list[index];
  }

  /**
   * 获取数据数量
   */
  getDataNumber() {
    return this.list.length;
  }
}

module.exports = Data;
