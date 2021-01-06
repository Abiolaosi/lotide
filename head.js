const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

/*
Create a function head which returns the first item in the array.

The head function should not return the first element as an array. It should simply return the element itself.

Use assertEqual to write test cases for various scenarios.
*/
const head = function(myArray) {

  return myArray[0];

}
/*
    An array with only one element should still yield that one element as its head
    An empty array should yield undefined as its head
*/
// TEST CODE

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Happy");
assertEqual(head([]), "Happy");
assertEqual(head(["Hello"]), "Hello");