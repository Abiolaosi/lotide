/*implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

Use assertEqual to write test cases for various scenarios.

The tests can be written below the definition of your function. Here's one example to get you started.

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS */
/*


Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.
*/
//import {eqArrays} from "./eqArrays"
const eqArrays = require("./eqArrays").eqArrays

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: "${array1}" !== "${array2}"`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false


assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true


assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

