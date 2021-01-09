/*


Implement middle which will take in an array and return the middle-most element(s) of the given array.

The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

    For arrays with one or two elements, there is no middle. Return an empty array.

middle([1]) // => []
middle([1, 2]) // => []

    For arrays with odd number of elements, an array containing a single middle element should be returned.

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

    For arrays with an even number of elements, an array containing the two elements in the middle should be returned

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

*/
const eqArrays = function(array1, array2) {
  //let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
//console.log(eqArrays([1, 2, 3], [3, 2, 1]));

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: "${array1}" !== "${array2}"`);
  }
};

const middle = function(array) {
  let middleValue = [];
   
  const lengthArray = array.length;
  
  if (lengthArray % 2 === 0) {
    middleValue.push(array[lengthArray / 2 - 1]);
    middleValue.push(array[lengthArray / 2 ]);
  } else {
    middleValue.push(array[lengthArray / 2 - .5]);
    
  }
  return middleValue;
  
};


console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3]));
console.log(middle(["abi", "joe", "joy"]));

// middle([1, 2, 3], [1, 2, 3]) // => true

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 4]);
console.log(eqArrays([1, 2, 3], [3, 2, 1]));