let date = new Date();
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());
console.log(date)

console.log(date.valueOf())
console.log(date.getTime())

console.log(+new Date())
console.log(Date.now())

let date1 = new Date('2022-12-23 12:12:12') + 8;
console.log(date1)

let arr = [1000, 1500, 2000, 2500, 500, 800, 5500]

console.log(arr.sort((a, b) => a - b))


let str = 'abcdiadeacacscqeqw'
let o = {}
for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (o[ch]) {
        o[ch]++
    } else {
        o[ch] = 1
    }
}
console.log(o)


console.log(typeof NaN)
