// 引入jsonwebtoken包
const jwt = require ('jsonwebtoken');
// 设定一个密钥，用来加密和解密token
const tokenKey = 'XfZEpWEn?ARD7rHBN';
// 定义一个对象
const Token = {
  /**
   * Token加密方法
   * @param data 需要加密在Token中的数据
   * @param time Token的过期时间，单位：s
   * @returns {*} 返回一个Token
   */
  encrypt: function (data, time) {
    return jwt.sign (data, tokenKey, {expiresIn: time})
  },
  /**
   * Token解密方法
   * @param token 加密之后的Token
   * @returns 返回对象{{token: boolean（true表示Token合法，false则不合法）, data: *（解密出来的数据或错误信息）}}
   */
  decrypt: function (token) {
    try {
      let data = jwt.verify (token, tokenKey);
      return {
        token: true,
        data: data
      };
    } catch (e) {
      return {
        token: false,
        data: e
      }
    }
  }
};
// 导出对象，方便其他模块调用
module.exports = Token;
