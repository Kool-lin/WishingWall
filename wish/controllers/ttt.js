/*
 * @Author: your name
 * @Date: 2020-11-19 15:43:23
 * @LastEditTime: 2020-11-20 16:28:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \msg_borad\wish\controllers\ttt.js
 */
const dateFormat = require('dateformat');
var a = new Date();
console.log(a);
var date = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
console.log(date);

//冒泡
function sort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        len--;
    }
    return arr;
}

//选择排序
function sort1(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}


console.log(sort1([2, 23, 1, 34, 243, 13, 2, 4]));