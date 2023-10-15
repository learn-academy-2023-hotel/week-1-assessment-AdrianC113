// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 4
// b) Verify and explain: Actual answer: 5
// i forgot to look at the string that was added by .push. The .push then adds that string to the end of the array and outputs the number of indexes total.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Actual answer: 10
// In a string, .length counts every character. The .length in this code, counted 10 for every letter/number (to include space).

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: l
// b) Verify and explain: Actual answer: o
// In a string, the character count starts at the zeroth place, not the first. So counting from left to right, character 4 is "o"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Actual answer: Ruby
// The "languages" variable contained 4 items but starts at the zeroth index. Once index 1 was called, starting from the left with 0 count and moving to the right by 1, the result is Ruby. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: Actual answer: the code was incorrect and must be changed.
// The method is being used on an array which will error out. The correct use of .toUpperCase() is to apply it to a string. We would have to change the values from an array to a string, use .toUpperCase(), then bring it back to an array.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Index
// b) Verify and explain: Actual answer: Number
// I was technically close however the correct term is number. When the typeof operator is being used, it determines the datatype following the operator. In this case, it is calling for the result of the "dataTypes.length" which is 4, which is a number.
