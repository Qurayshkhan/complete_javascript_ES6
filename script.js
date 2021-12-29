// document.getElementById('kk').innerHTML = "Hassan khan is a Good Boy"
// document.getElementById('hk').innerHTML = " Waleed is a Good Boy"



// function myfunction() {
//     document.getElementById("hk1").innerHTML = "paragraph changed";
// }



// Javascript output Method


// document.write('h1');

//Data Types

// let x = 50 + "Hassan";

// document.getElementById('hk1').innerHTML = x;

// let y = "Hassan" + 50;

// document.getElementById("hk2").innerHTML = x;

// let x = 16 + 4 + "Hassan";

// document.getElementById("hk1").innerHTML = x

//undefined
// let x;

// let x = 5;

// let x = "Hassan";


// let bike1 = "Honda 125";
// let bike2 = "Honda Cd70";

// document.getElementById('hk1').innerHTML = bike1;

// let answer2 = "it is Alright";
// let answer1 = "it is my car ,'Hassan'";
// let answer3 = 'He is called ,"Hassan"';

// document.getElementById('hk1').innerHTML = answer1;
// document.getElementById('hk1').innerHTML = answer2;
// document.getElementById('hk1').innerHTML = answer3;

// Boolean 
// let num1 = 5;
// let num2 = 10;
// let num3 = 20;
// document.getElementById('hk1').innerHTML = (num1 == num3);

//function

// function myfunction(_mul1, _mul2) {
//     return _mul1 * _mul2;
// }

// document.getElementById('hk1').innerHTML = myfunction(5, 6);


// function toCelsius(_f) {

//     return (5 / 9) * (_f - 32);
// }

// document.getElementById("hk1").innerHTML = toCelsius(55);


// function toCelsius(_faranhite) {
//     return (5 / 9) * (_faranhite - 32);
// }

// document.getElementById('hk1').innerHTML = "The tempreature is " + toCelsius(77) + " Celsius ";


// objects

// let car = { name: 'Honda City', color: 'white', method: 'start/stop' }

// document.getElementById('hk1').innerHTML = "The Name of car is " + car.name;


// let person = { Firstname: "Hassan", lastname: "khan", age: 20, eye: "blue" };

// document.getElementById('hk1').innerHTML = "The First name is " + person.Firstname + " Last name is " + person.lastname;

// console.log("Hellow World");

// console.log("Nabeel");

var myname = "Hassan khan";
// console.log(myname);

var myage = 26;

var _myname = "Hassan";
var $myname = "Hassan";
// console.log($myname);

// Data types in Javascript
var myname = "Hassan khan";
// console.log(typeof(myname));

var myage = 20;
// console.log(typeof(myage));

var am = true;
// console.log(am);
// console.log(typeof(am));

// console.log(10 + "20");

// Number can not add but it concat
// console.log(9 - "5");

// console.log("Hassan" - "khan");

// console.log(true + true);
// console.log(true + false);
// console.log(false + true);

// interview Question

// diffrence between null vs undefine

var iamuseless = null;
// console.log(iamuseless);
// console.log(typeof(iamuseless));  it is bug in js

var byby;
// console.log(byby); //undefine if u not pass the value....

// interview Question 2

// what is NaN?

// NaN is a property of Global Object.
// In other words,it is a variable in global scope.
// // the initial value of NaN is Not-a-Number

// var myphonenumber = 089008090;
// var myname = "Hassan khan";

// // console.log(isNaN(myphonenumber));
// // console.log(isNaN(myname));

// if (isNaN(myname)) {
//     // console.log("plz Enter the Valid Phone number");
// }

// Nan practice

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(Number.isNaN(NaN));

// Arithmetic Operator in Javascript

// 1) Assigment operator Assign a value to its left operands
// 2)bases on the vaue to its right operandss
//3) the simple assigment operator is (=)

// var x = 5;
// var y = 5;

// console.log("both x and y are equal" + x == y);
// in Es6

// console.log(`Both x and y are Equal :${ x == y}`);

// Arithametic opreator

// console.log(3 + 3);
// console.log(10 - 3);
// console.log(20 / 5);
// console.log(5 * 6);

// console.log("Remember operator" + 27 % 4);

// increment and decrement operator
// operator: x++or X--
// var num = 15;
// // var newnum = num++ + 5;
// var newnum = ++num + 5;
// console.log(num);
// console.log(newnum++);


// comparision operator
// comparision operator compare its operands and return a logical value based on weather the comparision is true
// var a = 10;
// var b = 20;
// console.log(a != b);
// console.log(a == b);
// console.log(a < b);
// console.log(a > b);

// logical operator
// && ||
// console.log((a < b) && (b < a));
// console.log(a > b) || (b > 0) || (b > 0);

// String concatenation (operator)
// the concatenate operator(+)concatinate two operator

// console.log("Hellow" + "World");

// var myname = "Hassan";
// console.log(myname + "khan");

// practice set operators

// sol 1:

// console.log(3 ** 3);
// console.log(9 ** 3);  ** exponentation operator

// sol 2:

// console.log(5 + "Hassan");

// sol 3:

// without third variable
// a = 10;
// b = 20;
// a = a + b;
// console.log(a);

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2);
// console.log(num1 === num2);

// control statement and loops

// var tomr = 'rain';
// if (tomr == 'rain') {
//     console.log("take a rain cote");
// } else {
//     console.log('no need to take raincoat ')
// }

// var year = 2021;

// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//     console.log("it is a leap year");
// } else {
//     console.log("it is not a leap year")
// }

// what is truty and falsy value in javascript
// In javascript there are 5 falsy values
// 0,"",undefine,null,NaN,false,is anyway

// if (score = 10) {
//     console.log("OMG,We loss a game");
// } else {
//     console.log("yeah,we won the game");
// }

// The conditional (ternary) operator is the only Javascript operator that takes three operands

// shorter version of if else  syntax variablename=
// (condition)?value1:value2

// var age = 17;
// console.log((age >= 18) ? "You can vote" : "You can't vote");

// if else if statement

// var area = "square";
// var PI = 3.142,
//     l = 5;
// b = 4, r = 3;
// // if (area == "circule") {
// //     console.log("The area of circule is" + PI * r ** 2);
// // } else if (area == "triangle") {
// //     console.log("The area of triangle is " + l * b / 2);
// // } else {
// //     console.log("Please Enter a Valid Number");
// // }
// // switch statement

// var area = "square";
// var PI = 3.142,
//     l = 5;
// b = 4, r = 3;

// switch (area) {
//     case 'circule':
//         console.log("The area of circule is " + PI * r ** 2);
//         break;
//     case 'triangel':
//         console.log("The area of triangle is " + (l * b) / 2);
//         break;
//     case 'reactangle':
//         console.log("The area of reactangle is " + (l * b));
//         break;
//     default:
//         console.log("Please enter a valid data");
// }

// while loop statement

// the while statement creates a loop that execute a specefic statement as long as the test condition eveluate to true

// var num = 0;
// // block scope explain later
// while (num <= 10) {
//     console.log(num); infinite loop if not put increment
//     num++;
// }

// Do While statement
// var num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num <= 10);

// for loop

// for (var num = 0; num <= 10; num++) {
//     debugger;
//     console.log(num);
// }

// Javascript to print table

// for (num = 1; num <= 20; num++) {
//     var tableof = 2;
//     var output = tableof * num;
//     console.log(tableof + " * " + num + " = " + output);

// }

// section 5 functions in javascript

// Function Defenation
//  A Javascript function is block of code design to perform a perticular task
// before we use a function we need to define it

// function functionname(){
//     statements
// }


// A function defenation (also called a function decelrations,or function defenation statement)
// consist of function keyword,followed by:
// The name of function 
// A list of parameters to the function,enclosed in pranthesis and seprated by commas. the javascript statements that define the functions enslosed in pranthesis


// function defenation

// diffrence between function parameter and function arguments

// function sum() {
//     var a = 10;
//     var b = 20;
//     var sum = a + b;
//     console.log(sum);

// }
// sum();

// function arguments(_5,6) is arguments (a,b) is parameters

// function add(a, b) {

//     var c = a + b;
//     return c;
// }
// console.log(add(5, 6));

// DRY Do Not repeat Yourself

// function expression
// Function Expression simply means 
// create a function and put it into a variables 

// function sum(a, b) {
//     return total = a + b;

// }
// var funExp = sum(5, 10);
// funExp;
// console.log('The sum of two number is ' + funExp);

// Anonymous functions have no name

// var funExp = function(a, b) {
//         return total = a + b;
//     }
//     // How to Call anonymous function
// var sum = funExp(15, 40);
// var sum2 = funExp(15, 110);
// console.log(sum > sum2);
// console.log('The sum of anonymous function is ' + sum);