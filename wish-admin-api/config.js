/*
 * @Author: your name
 * @Date: 2019-04-21 15:46:32
 * @LastEditTime: 2020-11-19 14:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第3章\wish-admin-api\config.js
 */
// 默认dev配置
const config = {
    // 是否调试模式
    DEBUG: true,
    // MySQL数据库配置
    MYSQL: {
        host: 'localhost',
        database: 'wish',
        username: 'root',
        password: 'linniupi3'
    }
};

if (process.env.NODE_ENV === 'production') {
    // 生产环境MySQL数据库配置
    config.MYSQL = {
        host: 'aaa.mysql.rds.aliyuncs.com',
        database: 'aaa',
        username: 'aaa',
        password: 'aaa'
    };
}
// 导出配置
module.exports = config;