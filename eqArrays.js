/*implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

Use assertEqual to write test cases for various scenarios.

The tests can be written below the definition of your function. Here's one example to get you started.

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS */

const eqArrays = function(array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    //console.log(array1[i], array2[i]);
   /* if (array1[i] === array2[i]) {
      resultArray.push(true);
    } else {
      resultArray.push(false);

     } */
    if (array1[i] != array2[i]) {
      return false;
    }


  }
  //console.log(resultArray);
  return true;
};
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));




module.exports = {eqArrays}