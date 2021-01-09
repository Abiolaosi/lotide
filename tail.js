/* 
create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

Your function should not modify the array that is passed in. It should return a new array.

Our assertEqual function is too simple to compare array values. JavaScript doesn't allow the use of === or == to compare two arrays.

Try out the equality checks between arrays in the node REPL to confirm the results shown below.

[1, 2, 3] === [1, 2, 3] // => false
[1, 2, 3] == [1, 2, 3] // => false

Therefore, we cannot expect this assertion to behave correctly:

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
The tail function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

*/

const tail = function (myArray) {
  return myArray.slice(1);
};
// Test

[1, 2, 3] === [1, 2, 3] // => false
[1, 2, 3] == [1, 2, 3] // => false

console.log(tail([5,6,7]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));



