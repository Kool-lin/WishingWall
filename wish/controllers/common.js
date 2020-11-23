const async = require('async');
const Constant = require('../constant/constant');
const exportObj = {
  checkParams,
  autoFn
};

module.exports = exportObj;

/**
 * 检查参数全局方法
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
 * 返回公用方法
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