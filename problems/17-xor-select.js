/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

function xorSelect(arr, callback1, callback2) {
  const result = [];

  for (const element of arr) {
    const satisfiesCallback1 = callback1(element);
    const satisfiesCallback2 = callback2(element);

    if ((satisfiesCallback1 || satisfiesCallback2) && !(satisfiesCallback1 && satisfiesCallback2)) {
      result.push(element);
    }
  }

  return result;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
