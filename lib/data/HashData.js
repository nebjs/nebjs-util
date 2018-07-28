const LexData = require('./Data');

/**
 * HashData类
 */
class HashData {
  constructor() {
    this.hash = {};
  }

  /**
   * 设置数据
   * @param hashName
   * @param data
   */
  setHashData(hashName, data) {
    if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
    if (!(data && data instanceof LexData)) throw new TypeError('data must be LexData');
    const {hash} = this;
    hash[hashName] = data;
    return data;
  }

  /**
   * 获取Data数据
   * @param hashName
   */
  getHashData(hashName) {
    if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
    return this.hash[hashName];
  }

  /**
   * 通过name设置data数据
   * @param hashName
   * @param dataName
   * @param dataValue
   */
  setData(hashName, dataName, dataValue) {
    if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
    if (!(dataName && typeof dataName === 'string' && dataName.length > 0)) throw new TypeError('dataName must be a non-empty string');
    const {hash} = this;
    let data = hash[hashName] || new LexData();
    return data.setData(dataName, dataValue);
  }

  /**
   * 通过name获取data数据
   * @param hashName
   * @param dataName
   */
  getData(hashName, dataName) {
    if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
    if (!(dataName && typeof dataName === 'string' && dataName.length > 0)) throw new TypeError('dataName must be a non-empty string');
    const data = this.hash[hashName];
    return data ? data.getData(dataName) : void 0;
  }

  /**
   * 通过index获取data数据
   * @param hashName
   * @param index
   */
  getHashByIndex(hashName, index) {
    if (!(hashName && typeof hashName === 'string' && hashName.length > 0)) throw new TypeError('hashName must be a non-empty string');
    if (!(index && typeof index === 'number' && index >= 0)) throw new TypeError('index must be a non-negative integer');
    const data = this.hash[hashName];
    return data ? data.getDataByIndex(index) : void 0;
  }
}

module.exports = HashData;
