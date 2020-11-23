// 引入Token处理的controller
const Token = require ('../../controllers/token');
// 引入常量
const Constant = require ('../../constant/constant');
// 配置对象
const exportObj = {
  verifyToken
};
// 导出对象，供其它模块调用
module.exports = exportObj;

// 验证Token中间件
function verifyToken (req, res, next) {
  // 如果请求路径是/login，即登录页，则跳过，继续下一步
  if ( req.path === '/login') return next();
  // 从请求头中获取参数token
  let token = req.headers.token;
  // 调用TokenController里的Token解密方法，对参数token，进行解密
  let tokenVerifyObj = Token.decrypt(token);
  if(tokenVerifyObj.token){
    // 如果Token验证通过，则继续下一步
    next()
  }else{
    // 如果Token验证不通过，则返回错误JSON
    res.json(Constant.TOKEN_ERROR)
  }
}