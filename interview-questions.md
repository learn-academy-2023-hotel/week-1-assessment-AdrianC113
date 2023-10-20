# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions:

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: Conditional statement for example is declaring a variable. Ex. var numbers = [1, 2, 3]

Researched answer: Conditional statements are a sequence of well-defined instructions that produce a unique output based on the value of the input. Conditionals follow a flowchart-like structure and allow for logic within the code.


1. What is git? What is the difference between git and Github?

Your answer: Git is a software that stores your code within your local machine. The difference between Git and GitHub is that Git stores your code in your local machine while GitHub stores your code in the cloud and can be accessed by others that you work with.

Researched answer:
**Git** is a free, open-source version control system widely used in the programming world. Git is a technology that is independent of any programming language or computer operating system.

**GitHub** is an online platform that uses git version control technology. GitHub allows developers to share and store code. GitHub is the largest host of code in the world (as of 2023). GitHub also offers developers tools for testing and deployment of applications. Developers create personal GitHub accounts that can be connected to teams allowing for collaboration on projects.



2. What is the difference between an array's index and its value?

Your answer: An array's index pertains to each values place in the array starting from the zeroth position on the left and counting to the right. It's value is the subjects or names that the array contains in each of those index postitions. 

Researched answer: 
Each element in the array must be a JavaScript data type. The content of each element is called the value.

Every value in an array has a particular location known as the index. Indexes are sequential numbers that are a bit like an address for every element in the array. Arrays are zero indexed which means the elements are numbered starting with the number 0 and increase by one whole number for each new element.



3. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Strings are a collection of characters that form either names or subjects that are encompassed in a pair of opening and closing double or single quotes. Arrays are a group of Strings separated by a comma and grouped together with a pair of square brackets. Arrays and strings are alike due to the fact that they both can hold information within them. Their differences are the datatypes involved for each subject. Strings are primitive datatypes, which can no longer be broken down, while arrays are a structure of data, which can be further broken down to primitive datatypes.

Researched answer: 
In JavaScript, arrays and strings have a lot of similar properties. They both are a collection of items, both have a length property, both are zero-indexed. But strings and arrays have many differences. It is often convenient to convert strings into arrays and vice-versa.

Unlike arrays, strings cannot be mutated. Because of this, you must convert each string into an array and then back again in order to mutate it. Strings are created using quotes while arrays are created using square brackets. 



4. STRETCH: What are the four pillars of object oriented programming? 

Researched answer: Source: https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/

Abstraction - To abstract something away means to hide away the implementation details inside something – sometimes a prototype, sometimes a function. So when you call the function you don't have to understand exactly what it is doing. Abstacting something is finding things that are similar in your code and providing a generic function or object to serve multiple places/with multiple concerns.

ex. With Abstraction: 
        Have a button with the title "Make coffee"
    Without Abstraction: 
        Have a button with the title "Boil the water"
        Have a button with the title "Add the cold water to the kettle"
        Have a button with the title "Add 1 spoon of ground coffee to a clean cup"
        Have a button with the title "Clean any dirty cups"
        And all the other buttons


Encapsulation - The definition of encapsulation is "the action of enclosing something in or as if in a capsule". Removing access to parts of your code and making things private is exactly what Encapsulation is all about (often times, people refer to it as data hiding).

Encapsulation means that each object in your code should control its own state. State is the current "snapshot" of your object. The keys, the methods on your object, Boolean properties and so on. If you were to reset a Boolean or delete a key from the object, they're all changes to your state.

Limit what pieces of your code can access. Make more things inaccessible, if they aren't needed. Binding your data to something, whether it's a class, object, module or function, and doing your best to keep it as private as you reasonably can.

Reasons to use Encapsulation in your code:
    - Lots of unrelated bits of code will become dependent/coupled to one another via the global variable.
    - You will likely override the variables if the name get's reused, which can lead to bugs or unpredictable behaviour.
    - You will likely end up with Spaghetti Code – code that's hard to reason through and follow what is reading and writing to  your variables and changing state.


Inheritence - lets one object acquire the properties and methods of another object. In JavaScript this is done by Prototypal Inheritance.

Reusability is the main benefit here. We know sometimes that multiple places need to do the same thing, and they need to do everything the same except for one small part. This is a problem inheritance can solve. Keep your inheritance simple to understand and predictable. Don't inherit from somewhere completely unrelated because there's one method or property you need. Inheritance doesn't fix that particular problem well.


Polymorphism - Polymorphism means "the condition of occurring in several different forms." That's exactly what the fourth and final pillar is concerned with – types in the same inheritance chains being able to do different things. If you have used inheritance correctly you can now reliably use parents like their children. When two types share an inheritance chain, they can be used interchangeably with no errors or assertions in your code. The real power of polymorphism is sharing behaviours, and allowing custom overrides.



## Looking Ahead: Terms for Next Week

Research and define the following terms. Hint: use the syllabus!

1. Higher Order Functions:
- A higher-order function is a built in method in JavaScript that takes in a function as an argument. Often higher-order functions are designed to operate on arrays. The function passed as an argument will execute once for every item in the array. This makes higher-order functions incredible useful for iteration.


2. Jest:
- Jest is a JavaScript testing framework. The Jest framework is made up of a collection of files called dependencies which contain snippets of code functionality. Using all these code snippets together in the right way will give us the ability to run tests. There are many dependencies to manage and all need to work together in exactly the right way. This is a challenge on its own so in 2016 Facebook created a package manager called yarn to manage all the dependency files. A package manager will install dependencies, manage the dependencies, and give us the terminal commands to execute the tests.


3. Objects:
- Objects are a JavaScript data type that has collections of key:value pairs. Objects can contain static information as well as actions in the form of methods. This makes objects the intersection of data and behavior.


