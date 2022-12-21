// let x = 1;
// let y = x;
// console.log(x === y); // true
// let z = 1;
// console.log(x === z); // true

// let x = {};
// let y = x;
// console.log(x === y); // true
// x.name = "MindX";
// console.log(y); // {name: "MindX"}

let x = {};
let y = {};
console.log(x === y); // false
x.name = "Code Intensive";
console.log(y); // {}
