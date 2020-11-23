// 引入Sequelize模块
const Sequelize = require('sequelize');
// 引入数据库实例
const db = require('../db');
// 定义model
const Wish = db.define('Wish', {
  // 主键
  id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
  // 许愿姓名
  name: {type: Sequelize.STRING(20), allowNull: false},
  // 许愿内容
  content: {type: Sequelize.STRING, allowNull: false}
}, {
  // 是否支持驼峰
  underscored: true,
  // MySQL数据库表名
  tableName: 'wish',
});
// 导出model
module.exports = Wish;
