/*
 * @Author: your name
 * @Date: 2020-11-18 21:56:41
 * @LastEditTime: 2020-11-18 22:10:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \msg_borad\wish\routes\users.js
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;