// 引入共用方法
const Common = require('./common');
// 引入async
const async = require('async');
//引入id唯一生成
const uuid = require('node-uuid');
// 引入wish的model实例
const WishModel = require('../models/wish');
// 引入常量constant
const Constant = require('../constant/constant');
// 配置导出对象
let exportObj = {
    getList,
    add
};

module.exports = exportObj;

// 获取许愿列表方法
function getList(req, res) {
    // 定义一个async任务
    let tasks = {
        // 执行查询方法
        query: cb => {
            // 使用Sequelize的model的findAll方法查询
            WishModel
                .findAll({
                    limit: 20,
                    order: [
                        ['created_at', 'DESC']
                    ],
                })
                .then(function(result) {
                    // 查询结果处理

                    // 定义一个空数组list，用来存放最终结果
                    let list = [];
                    // 遍历SQL查询出来的结果，处理装入list
                    result.forEach((v, i) => {
                        let obj = {
                            id: v.id,
                            name: v.name,
                            content: v.content
                        };
                        list.push(obj);
                    });
                    // 通过async提供的回调，返回数据到下一个async方法
                    cb(null, list);
                })
                .catch(function(err) {
                    // 错误处理

                    // 打印错误日志
                    console.log(err);
                    // 通过async提供的回调，返回数据到下一个async方法
                    cb(Constant.DEFAULT_ERROR);
                });

        }
    };

    // 让async自动控制流程
    async.auto(tasks, function(err, result) {
        if (err) {
            // 如果错误存在，则打印错误
            console.log(err)
        } else {
            // 如果没有错误，则渲染index视图模板，同时将之前获取的结果数组list，以变量list渲染到页面上
            res.render('index', {
                list: result['query']
            });
        }
    })
}

// 添加愿望处理方法
function add(req, res) {
    let id = uuid.v1();
    let date = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
    // 定义一个async任务
    let tasks = {
        // 验证必填参数方法
        checkParams: cb => {
            Common.checkParams(req.body, ['name', 'content'], cb)
        },
        // 执行添加方法
        add: ['checkParams', (results, cb) => {
            // 使用Sequelize的model的create方法插入
            WishModel
                .create({
                    id: id,
                    name: req.body.name,
                    content: req.body.content,
                    created_at: date,
                    updated_at: date
                })
                .then(function(result) {
                    // 插入结果成功处理
                    cb(null);
                })
                .catch(function(err) {
                    // 错误处理

                    // 打印错误日志
                    console.log(err);
                    // 通过async提供的回调，返回数据到下一个async方法
                    cb(Constant.DEFAULT_ERROR);
                });
        }]
    };

    // 让async自动控制流程
    async.auto(tasks, function(err, result) {
        if (err) {
            // 错误处理

            // 打印错误日志
            console.log(err);
            let result = '失败';
            let msg = '添加失败，出现错误';
            if (err.code === 199) {
                // 参数缺少错误
                msg = '添加失败，姓名和愿望都要填上哦';
            }
            // 渲染失败结果页面，将result和msg渲染到页面上
            res.render('result', {
                result: result,
                msg: msg
            });
        } else {
            // 渲染成功结果页面，将result和msg渲染到页面上
            res.render('result', {
                result: '成功！',
                msg: '添加成功，返回去看一下'
            });
        }
    })
}