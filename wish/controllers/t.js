/*
 * @Author: your name
 * @Date: 2020-11-20 16:38:44
 * @LastEditTime: 2020-11-20 16:48:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \msg_borad\wish\controllers\t.js
 */
var p1 = new Promise(function(resolve, reject) {　　
    setTimeout(function() {　　　　
        console.log('1');　　　　
        resolve()　　
    }, 3000)
})

function p2() {　　
    return new Promise(function(resolve, reject) {　　　　
        setTimeout(function() {　　　　　　
            console.log("2");　　　　　　
            resolve();　　　　
        }, 100)　　　
    })
}

function p3() {　　
    return new Promise(function(resolve, reject) {　　　　
        setTimeout(function() {　　　　　　
            console.log("3");　　　　　　
            resolve();　　　　
        }, 500)　　
    })
}

function p4() {　　
    return new Promise(function(resolve, reject) {　　　　　
        setTimeout(function() {　　　　　　　　
            console.log("4");　　　　　　　　
            resolve();　　　　　　
        }, 3000)　　
    })
}


// p1.setTimeout;
// p2();
// p3();
// p4();

p1.then(function() {　　
        return p2()
    })
    .then(function() {　　
        return p3();
    })
    .then(function() {　　
        return p4();
    })