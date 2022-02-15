'use strict';

//assignemnt 1
/*
c

1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/

let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
numOfDaysUntilWeekend -= 1;
console.log(numOfDaysUntilWeekend); 


//assignemnt 2
//Addition to numbers

let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
numOfDaysUntilWeekend += 1;
console.log(numOfDaysUntilWeekend);

//assignemnt 3
//Subtraction to numbers

let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
numOfDaysUntilWeekend -= 1;
console.log(numOfDaysUntilWeekend);

//assignemnt 4
//write two sentences in two variables and connect them together 

const sen1 = "Ema is calling her dad";
const sen2 = "Maciek is playing a game.";
const sentance = sen1 + " and " + sen2;
console.log(sentance);

//assignemnt 5
//write two variables, one number and one string. add them together

const book = "Essential Bukowski";
const year = "2016";
const faveBook = "My favorite book is " + book + " published in " + year + ".";
console.log(faveBook);

//assignemnt 6
//write the answears in the comment
let r = 15;
let s = 5;
let t = r + s;
let u = r - s;
let v = t / u;
let x = r * v;
let y = s % v;

//t=20, u=10, v=2, x=30, y=1

//assignemnt 7
//Why does it not write out? 
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4; 
if(x == 30 || y == 2 ){
 console.log("yeah you got it");
}

//It doesn't write out because both are false and in order to write out at least one has to be true.
//change a number in a variable, so it print out the 

let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4; 
if(x == 3 || y == 2 ){
 console.log("yeah you got it");
}


//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt, 
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt

let x = 20
let age = prompt("Please enter your age", "18");
if (age >= x) {
  console.log("Hello! How are you today?");
}


//assignment 9
//write these numbers in the console and write the output. Explain you thing this happens
    0.1 + 0.2;
    0.1 + 0.2 === 0.3;
    3  - 1
    3  + 1
    '3' - 1 
    '3' + 1 
    '222' - -'111'

//output=333
//



//assignemnt 9
//Write a JavaScript program to determine whether a given year is a leap year 

const year = prompt('Enter a year:');
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}