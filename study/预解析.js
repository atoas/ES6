// 1.
console.log(num)  // undefined
var num = 10;
//  使用 let 和 const 就会报错
// 相当于执行了
// var num
// console.log(num)
// num = 10

// 2.
// fun()  // 报错
// var fun = function () {
//     console.log(22)
// }
// 函数表达式  调用函数表达式必须写在函数表达式的下面
// 相当于执行了下面的代码
// var fun
// fun()
// fun = function () {
//     console.log(22)
// }

// 3.    正确执行
fn()

function fn() {
    console.log(11)
}

// 1. 我们 js 引擎运行 js 分为两步:  预解析  代码执行
// （1）预解析  js 引擎会把 js 里面所有的 var 还有 function 提升到当前作用域的最前面
// （2）代码执行  按照代码书写的顺序从上往下执行
// 2. 预解析分为  变量预解析（变量提升）和 函数预解析（函数提升）
// （1）变量提升 就是把所以的变量声明提升到当前作用域最前面 不提升赋值操作
// （2）函数提升 就是把所有的函数声明提升到当前作用域的最前面 不调用函数

// 4.
// f1()
// console.log(c)
// console.log(b)
// console.log(a)  // 报错
//
// function f1() {
//     var a = b = c = 9
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// 相当于以下代码
function f1() {
    var a;
    a = b = c = 9
    // 相当于 var a = 9; b = 9; c = 9; b 和 c 直接赋值 没有 var 声明当全局变量看
    // 集体声明 var a = 9; b = 9; c = 9;f
    console.log(a)
    console.log(b)
    console.log(c)
}

f1()
console.log(c)
console.log(b)
console.log(a)
