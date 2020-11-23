// 引入async模块
const async = require('async');
// 引入常量模块
const Constant = require('../constant/constant');
// 定义一个对象
const exportObj = {
  clone,
  checkParams,
  autoFn
};
// 导出对象，方便其他方法调用
module.exports = exportObj;

/**
 * 克隆方法，生成一个默认成功的返回
 * @param obj
 * @returns {any}
 */
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 校验参数全局方法
 * @param params   请求的参数集
 * @param checkArr 需要验证的参数
 * @param cb       回调
 */
function checkParams (params, checkArr, cb) {
  let flag = true;
  checkArr.forEach(v => {
    if (!params[v]) {
      flag = false;
    }
  });
  if (flag) {
    cb(null);
  }else{
    cb(Constant.LACK);
  }

}

/**
 * 返回统一方法，返回JSON格式数据
 * @param tasks  当前controller执行tasks
 * @param res    当前controller responese
 * @param resObj 当前controller返回json对象
 */
function autoFn (tasks, res, resObj) {
  async.auto(tasks, function (err){
    if (!!err) {
      console.log (JSON.stringify(err));
      res.json({
        code: err.code || Constant.DEFAULT_ERROR.code,
        msg: err.msg || JSON.stringify(err)
      });
    } else {
      res.json(resObj);
    }
  });
}