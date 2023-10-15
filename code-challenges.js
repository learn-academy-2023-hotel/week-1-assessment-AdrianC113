// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:
// input: first string -> fruit1 = "apple", second string -> fruit2 = "banana"
// output: The string with the most characters is "banana"
// use a condition statement to evaluate the strings
// use .length to get number of characters
// use realtional operator to compare

// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Code used: 
console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)

// Pseudo code:
// input: first variable -> padres1984WorldSeriesRuns = [2, 5, 2, 2, 4] and the second variable -> padres1998WorldSeriesRuns = [6, 3, 5, 3]
// output: When counting the number of indexes in each array for both variables, the total is 9
// use a condition statement to evaluate the arrays
// use .length to get the number of characters in the arrays
// use a rational operator to add both arrays using the assigned variables


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Code used:
const reverseCohort = currentCohort.split("").reverse().join("")

// Pseudo code:
// input: variable -> current Cohort = "Golf 2023"
// output: String in the variable currentCohort must output in reverse as "3202 floG"
// use a condition statement to evaluate the string
// use .split to separate the string in order to reverse them as they cannot be reverse otherwise
// use .reverse to flip the contents of the variable
// use .join to finally put the contents back together to return to string data type


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Code used:
for(let i=0; i <stockExchange.length; i++){
    if(stockExchange[i] % 2 !== 0){
        console.log(stockExchange[i])
    }
}

// Pseudo code:
// input: variable -> stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10] 
// output: the data contained in the array of stockExchange must output the odd numbers: 13, 5, -5, and 27
// use a for loop and start the initialization with the index of 0
// determine the condition by defining the range by capturing the length of the variable stockExchange
// determine the one by one incrementation by using the i++ notation
// if the stockExchange, when divided by 2, has a remainder that is not 0, then list out those values
