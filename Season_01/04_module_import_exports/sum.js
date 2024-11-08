
console.log("start");

let a = 100;
console.log(a);

function sum ( a, b ) {
    const sum = a + b;
    console.log(sum);
}

function sub ( a, b ) {
    const sub = a - b;
    console.log(sub);
}

console.log("end");

module.exports = { sum, sub };

