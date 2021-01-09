const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

/*
Create a function called countLetters.

The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

*/

const countLetters = function(string) {
  let resultLetters = {};
  // run for loop to initialize object with 'number' types
  for (let letter in string) {
    resultLetters[string[letter]] = 0;
  }
  // run loop second time to increment values
  for (let letter in string) {
    resultLetters[string[letter]]++;
  }
  // remove spaces
  delete resultLetters[" "];
  return resultLetters;
};

console.log(countLetters("lighthouse in the house"));

console.log(countLetters("i am going to school"));
