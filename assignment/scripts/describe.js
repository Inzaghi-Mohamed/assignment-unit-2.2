// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Declared a varable (name) and we asssigned it to string ("Dane")
// We have conditional statement which checks whether the variable stores the name "Mary"
// if that is true , it is going to print "Hi, Mary!"
// if the condition above is false, then print "How do you do "


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Declared a variable (secret) without assigning it anything
// Declared a variable (code) and assigned it to 123
// Created a conditional statement that check whether value store in varible (code) is equal to 123
// Inside the if statement, we assigned the variable (secret) to 'super' and we multiplied the value of the varibale (code)
// Created another conditional statement that checks whether the new value of the variable(code) is greater than 250
// And if that is true, it will print the value re-assigned to varible (secret) which is 'duper'
// Lastly, we wrote (console.log) to checks which conditional statement would be executed.
// And in this case, it will print 'super' since the first conditional is true, thus it will not move to the next conditional statement.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set it to true as a boolen
// We make a variable called age and set it to 34 as a number
// We make a variable called zip and set it to 55407 as a number
// We check whether isStudent variable is true and zip variable is greater than 80000
// if the condition above is met, it will print 'You're a student on the West Coast!'
// Again, we check whether isStudent is false or age is less than 30
// if the condition is met, it will print 'What are your hobbies?'
// Again, we check whether isStudent variable is true
// if the codition is true, it wiil print 'Welcome to Prime!'
// Finally, if all the conditions above are not met, it will print 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 

// FIX -- the instruction below is misleading since in the code, we only re-assigned colorOne to 'purple' if mix is equal to true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX-- Wrong assignment to colorOne and colorTwo, we are supposed to swap their values, such that colorOne is assigned to 'blue' and colorTwo to 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX-- We check if temp is higher than 39 OR if time is greater or equal to 4, 
// But the instruction used AND instead of OR 

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// FIX-- It is, so we console.log 'no entry'...since minAge is equal to age.

/*
let age = 21;
const minAge = 21;


// FIX-- We check whether minAge is less than or equal to age, but the instruction says otherwise!

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

