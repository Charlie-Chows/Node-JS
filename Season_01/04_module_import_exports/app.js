
// const { sum, sub } = require("./sum");
// const { mu, di } = require("./xyz");

const { sum, sub, mu, di } = require("./caluculate/index");

//import json data
const data = require("./data.json");

let a = 10;
let b = 20;
let s = 7;

sum(a,b);
sub(a,b);

mu(a,b);
di(a,b);

console.log(s);

console.log( data );






