const fs = require("fs")

function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile("../resources/为学.md", (err, data) => {
            // 如果成功
            if (err) reject(err)
            // 如果成功
            resolve(data)
        })
    })
}

function readChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile('../resources/插秧诗.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function readGuanShuYouGan() {
    return new Promise((resolve, reject) => {
        fs.readFile("../resources/观书有感.md", (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

async function main() {
    let weixue = await readWeiXue();
    let chayangshi = await readChaYangShi();
    let guanshuyougan = await readGuanShuYouGan();

    console.log(weixue.toString())
    console.log(chayangshi.toString())
    console.log(guanshuyougan.toString())
}

main()