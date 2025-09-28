
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Export the functions to be used in other modules
module.exports = {
    sum:add,
    sub,
    multiply,
    divide
};
1
exports.add = (a, b) => a + b;
2
exports.sub = (a, b) => a - b;
3
exports.multiply = (a, b) => a * b;
4
exports.divide = (a, b) => {
5
    if (b === 0) {
6
        throw new Error("Division by zero is not allowed.");
7
    }
8
    return a / b;
9
};
10
​
11
exports.square = (x) => x * x;
12
exports.cube = (x) => x * x * x;
13
exports.name = "Maths Module";
14
exports.version = "1.0.0";
15
// module.exports = {
16
//     add, 
17
//     sub,
18
//     multiply,
19
//     divide,
20
//     square,
21
//     cube,
22
//     name: "Maths Module"
23
// };
24
​
25
// Alternative way using module.exports
26
// module.exports = {
27
//     add: (a, b) => a + b,
28
//     sub: (a, b) => a - b,
29
//     multiply: (a, b) => a * b,
30
//     divide: (a, b) => {
31
//         if (b === 0) {
32
//             throw new Error("Division by zero is not allowed.");
33
//         }
34
//         return a / b;
35
//     },
36
//     square: (x) => x * x,
37
//     cube: (x) => x * x * x,
38
//     name: "Maths Module"
39
// };


