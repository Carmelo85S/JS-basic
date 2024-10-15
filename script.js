
/*Exercise 1:  

Print "Hello, World!" 

Write a simple JavaScript program that prints "Hello, World!" to the console.  

This exercise will help you understand how to use the console.log() function. */

console.log("Hello World");


/*Create variables and use them 

Create three variables: one to store your name, one for your age, and one for your favorite color.  
Then, use console.log() to print a sentence that includes all three variables.*/

const name = "Carmelo";
let age = 39;
let favoriteColor = "Blue";

console.log(`Hi, my name is ${name}, I am ${age} years old, and my favorite color is ${favoriteColor}.`);




/*Basic arithmetic operations 

Write a JavaScript program that performs basic arithmetic operations: addition, subtraction, multiplication, and division.  

Create two variables with numbers, and then use these variables to perform the operations using console.log(). */

const num1 = Number(prompt ("Insert first number"));
const num2 = Number(prompt ("Insert second number"));
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log("Addition: " + num1 + " + " + num2 + " = " + sum);
console.log("Subtraction: " + num1 + " - " + num2 + " = " + difference);
console.log("Multiplication: " + num1 + " * " + num2 + " = " + product);
console.log("Division: " + num1 + " / " + num2 + " = " + quotient);
