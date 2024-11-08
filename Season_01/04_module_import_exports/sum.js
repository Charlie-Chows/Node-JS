
console.log("start");

let a = 100;
console.log(a);

let s = 77;

function sum ( a, b ) {
    const sum = a + b;
    console.log("sum : ", sum);
}

function sub ( a, b ) {
    const sub = a - b;
    console.log("sub : ",sub);
}

console.log("end");

module.exports = { s, sum, sub };

