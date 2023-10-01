/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false

*******************************************************************************/

function atMost(arr, max, callback) {
    let count = 0; // Initialize a counter for elements that satisfy the callback.
  
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        count++; // Increment the counter for elements that satisfy the callback.
  
        if (count > max) {
          return false; // If the count exceeds max, return false.
        }
      }
    }
  
    return true; // If the count is at most max, return true.
  }





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = atMost;
