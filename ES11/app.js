const btn = document.getElementById("btn")

btn.onclick = function () {
    // 动态引入
    import('./a.js').then(module => {
        module.hello()
    })
}
