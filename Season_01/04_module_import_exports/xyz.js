console.log("Hello");

function mul ( a, b ) {
    const mul = a * b;
    console.log("Mul : ", mul);
}

function div ( a, b ) {
    const div = a / b;
    console.log("div : ", div);
}

module.exports = { mu : mul, di : div }; 