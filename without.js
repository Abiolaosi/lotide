/*
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

Here are a couple examples, but please don't limit your testing to just these scenarios:

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

Use assertArraysEqual to write test cases for various scenarios.

The tests can be written below the definition of your function.


*/

const eqArrays = function(array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    
    if (array1[i] != array2[i]) {
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

const without = function(sourceArray, outArray) { 
  let newArray = [];
for (let i = 0; i < sourceArray.length; i++ ) {
  const toCompare = sourceArray[i];
  if (!contains(outArray, toCompare)) {
    newArray.push(toCompare);
  }
  }

console.log(newArray);
return newArray;
}
const contains = (arrayToCheck, item) => { 
  for (let element of arrayToCheck) { 
  // console.log(arrayToCheck, element);
    //console.log("to remove  ", toRemove);
    if (item === element) {
      // console.log("remove:", typeof item, typeof element);
      return true;
    } 
      // console.log("keep:", typeof item, [item], typeof element, [element]);
      
    
    }
    return false;
}
/*
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false


assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true


assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false */

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);
