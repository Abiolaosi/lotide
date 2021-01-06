/*

Make the function compare the two values it takes in and print out a message telling us if they match or not.

    If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
    Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)

Some examples:

Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
Assertion Passed: 1 === 1

Write out a few calls to it and confirm that it is indeed working as expected.

Test at least the following scenarios:

    Comparing identical strings
    Comparing non-identical strings
    Comparing identical numbers
    Comparing non-identical number*/


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Happy", "Happyp");
assertEqual(5, 2);
assertEqual("Happy", "Happy");