// const arr = [1, 2, 3];

// const arr2 = [2, 4, 6];

// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2 = [...arr2, arr[i] *2];
// }
// const arr2 = arr.map((item) => {
//   return item * 2; // transform every item by double it.
// });
// console.log(arr2);

// console.log(arr2); // [2, 4, 6]
// console.log(arr); // [1, 2, 3]

// const arr = [1, 2, 3, 4];
// const arr2 = arr.filter((item) => {
//     return item % 2 === 0; // Get all even number
//   });
// console.log(arr2); // [2, 4]
// console.log(arr); // [1, 2, 3]

// Input: [1, 2, 3, 5, 4, 2, 6, 4]
// Output: [1, 2, 3, 5, 4, 6]

// initialValue = 5
// arr     1  2  3
// total   5  6  8
// sum     6  8  11
const arr = [1, 2, 3, 5, 4, 2, 6, 4]
const initialArr = [];
const rs = arr.reduce((result, item) => {
    console.log("result: ",result)
    console.log("item: ", item)
    console.log();
    for (let i = 0; i < result.length; i++) {
        if (result[i] === item) {
            return result;
        }
    }
    result.push(item);
    return result;
}, initialArr);
console.log(rs);