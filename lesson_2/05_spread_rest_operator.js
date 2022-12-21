// spread operator
const arr = [4, 5, 6];
const arr2 = [1, 2, 3];

// use spread for getting a list of number.
// const max = Math.max(...arr) // 6
// console.log(max);
// copy all elements from arr to another array and add 7 to tail
// let arrCloned = [...arr, 7] // [4, 5, 6, 7]
// console.log(arrCloned)

// copy all elements from arr to another array and add 3 to head
// arrCloned = [3, ...arr] // [3, 4, 5, 6]//
// console.log(arrCloned)

// concat 2 arrays and add a number in between
// const concatedArray = [...arr, 0, ...arr2] // [4, 5, 6, 0, 1, 2, 3]
// console.log(concatedArray)

const obj = { name: "MindX" };

// copy all fields in object to another object and add field
// const obj2 = { ...obj, address: "Hanoi"} // {name: "MindX", address: "Hanoi"}
// console.log(obj2);
// copy all fields in object to another object and overwrite field
// const obj3 = {...obj, name: "Code Intensive"} // {name: "Code Intensive"}
// console.log(obj3)
// const obj4 = {name: "Code Intensive", ...obj} // {name: "MindX"}
// console.log(obj4);

// rest operator

function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)) // 15
