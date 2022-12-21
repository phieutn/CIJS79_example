// Function expression, hoisting supported
// function sum01(a, b) {
//   console.log("function: sum 2 numbers");
//   return a + b;
// }
// console.log(sum01(1, 2));

// Anonymous function, no hoisting supported
// const sum02 = function (a, b) {
//   console.log("Anonymous function: sum 2 numbers");
//   return a + b;
// };
// console.log(sum02(3, 4));

// Arrow function, no hoisting supported
// const sum03 = (a, b) => {
//   console.log("Arrow function: sum 2 numbers");
//   return a + b;
// };
// console.log(sum03(5, 6));

// const sum04 = (a, b) => a + b;
// console.log(sum04(7, 8));

// const double = a => a * 2; // single param
// console.log(double(9));

const getAddress = () => ({city: 'Hanoi'})
console.log(getAddress());

// const getCoordinate = () => ([0, 1]) // return an array
// console.log(getCoordinate())