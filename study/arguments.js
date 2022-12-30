// arguments 的使用 只有函数才有 arguments 对象 而且是每个函数都有内置好了这个arguments
function fn() {
    // arguments 里面存储了所有传递过来的实参
    //
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

// fn(1, 2, 3)
// arguments 是伪数组 并不是真正意义上的数组
// 1. 具有数组的 length 属性
// 2. 按照索引的方式进行存储
// 3. 它没有真正数组的一些方法 pop()  push() 等

console.log(111)
setTimeout(() => {
    console.log(3333)
}, 0)

console.log(2222)
