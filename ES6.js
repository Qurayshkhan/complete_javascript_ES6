//Now Time To Modren Javascript
//const vs let
// var functions scope
// let and
// const Block scope
// var myname = "Hassan khan";
// console.log(myname);
// myname = "Quresh khan";
// console.log(myname);

// let myname = "Hassan khan";
// console.log(myname);
// myname = "Quresh khan";
// console.log(myname);

// const myname = "Hassan khan";
// console.log(myname);
// myname = "Quresh khan";
// console.log(myname);


// var example function scope change anywhere
// function bio() {
//     var myname = "Hassan khan";

//     console.log(myname);
//     if (true) {
//         var lastname = "Quresh khan";
//         console.log(lastname);
//         console.log("First Name" + myname);
//         console.log("last Name" + lastname);
//     }
//     console.log("outer" + lastname);
// }
// bio();
//let scope in block
// function bio() {
//     let myname = "Hassan khan";

//     console.log(myname);
//     if (true) {
//         let lastname = "Quresh khan";
//         console.log(lastname);
//         console.log("First Name" + myname);
//         console.log("last Name" + lastname);
//     }
//     console.log("outer" + lastname);
// }
// bio();
// function bio() {
//     const myname = "Hassan khan";

//     console.log(myname);
//     if (true) {
//         const lastname = "Quresh khan";
//         console.log(lastname);
//         console.log("First Name" + myname);
//         console.log("last Name" + lastname);
//     }
//     console.log("outer" + lastname);
// }
// bio();

// template litrels
// Creating Table
// for (let num = 1; num <= 10; num++) {
//     let table = 5;
//     // console.log("tableof" + "*" + "num" + "=" + table * num);old way
//     console.log(` ${table} * ${num} = ${table * num} `); //new way
// }
// Default parameter
// in future you or user forgot to pass any parameter to avoid this nan we use default parameter
// function mul(a, b = 5) { //5 is a default parameter
//     return a * b;
// }
// console.log(mul(5));

// Arrow function write like below
// const sum = () => `The sum is ${(a=5)+(b=6)}`;

// console.log(sum());

var friends = ['Hassan', 'Husnain', 'Adil', 'Nabeel', 'Tayyab', 'Haris', 'Adeel', 'Raza'];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]); //for get last element use length -1
// for (var i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }
// For in Loop show index of elements
// for (let elements in friends) {
//     console.log(elements);
// }
// For of Loop show elemenst of array
// for (let elements of friends) {
//     console.log(elements);
// }
// friends.forEach(function(elements, index, array) {
//     console.log(elements, "index " + index, "array " + array);
// })
// output using arrow
// function
// friends.forEach((elements, index, array) => {
//     console.log(elements, "index " + index, "array " + array);
// })

// Searching and filter of an array

var Fruits = ['Apple', 'Banana', 'Orange', 'Cherry', 'PineApple', 'Mango', 'Grapes'];
// console.log(Fruits);
// console.log(Fruits.pop());
// console.log(Fruits);

// console.log(Fruits);
// console.log(Fruits.shift());
// console.log(Fruits);

// Challange time crud
const month = ['Jan', 'fab', 'March', 'April', 'May'];
// sol:1
// const mymonth = month.splice(month.length, 0, 'Dec');
// const mymonth = month.splice(5, 0, 'Dec'); // using index number
//Add string in last using splice method or without push pop method etc
// console.log(month);
// //sol:2

// console.log(mymonth);
// acctually spilice method use how many elements are delete in Array so that it show empty array

// Sol:3
// const mymonth = month.splice(2, 2, 'march');
// console.log(month);
// const indexmonth = month.indexOf("Jan"); //if u not know index use indexof method

// if (indexmonth != -1) {
//     const updatemonth = month.splice(0, 0, "SEP");
//     console.log(month);
// } else {
//     console.log("No Data found");
// }
// const indexmonth2 = month.indexOf("SEP");
// if (indexmonth2 != -1) {
//     const deletemonth = month.splice(0, 1, "Jan");
//     console.log(month);
// } else {
//     console.log("No data found");
// }

// Array subsession 4 Map and Reduce Method
// map method return new array
// const array1 = [1, 4, 2, 9, 4, 16, 25];
// let newarr = array1.map((currelement, index, arr) => {
//     return currelement > 9;
// })
// console.log(array1);
// console.log(newarr);

// let newarr = array1.map((currElem, index, arr) => {
//     return `The Index of ${index}, The value of ${currElem} is ${arr}`;
// }).reduce();
// console.log(newarr)
// it return new array without touch origional arrray

// let arr = [25, 36, 49, 64, 81];
// let arrSqr = arr.map((cElement, index, array) => {
//     return Math.sqrt(cElement);
// })
// console.log(arrSqr);
// we also use chaining method  use mathod with other method
// let arr = [2, 3, 4, , 6, 8];
// let arrnew = arr.map((cElement, index, arr) => { return cElement * 2;}).filter((cElement) => {
//     return cElement > 10;
// });
// console.log(arrnew);
// reduce method flatten an array means to convet the 3 d to 4 d array into a single dimentional array
// the reduce Method take 4 arrguments
// Accumulaor
// current value
// current index
// source array
// let arr = [5, 6, 2, 6, 7, 8, 4, 55, 6];
// let newarr = arr.map((cElement, index, arr) => {
//     return cElement * 2;
// }).filter((cElement) => {
//     return cElement > 10;
// }).reduce((accumulator, cElement) => {
//     return accumulator *= cElement;
// });
// console.log(newarr);
// How To Flat an array convert 2d and 3rd convert into single diamention
// const arr = [
//     ['zone1', 'zon2'],
//     ['zone3', 'zon4'],
//     ['zone5', 'zon6'],
//     ['zone7', 'zon8']

// ];
// let flatarr = arr.reduce((accum, element, index, arr) => {
//     return accum.concat(element);
// });
// console.log(flatarr);

//  What is Strings
// A Javascript  string are zero or more chracter written in qoutes
//  Javascript string are used for storing and manipulationg text
// You can use single or double qoutes
// let myname = "Quresh khan ";
// console.log(myname.length);
// // Escape chracter
// let qoutes = "we are the So called \"Vikings\" from the north";
// console.log(qoutes);
// let qoute = "we are the So called 'Vikings' from the north";
// console.log(qoutes);
// Find a string in a string
//  -1 in output show that data not found 
// we use index of method
// const myBio = "My name is Hassan Khan";
// // console.log(myBio.indexOf("Hassan"));
// console.log(myBio.indexOf("H", 6));
// console.log(myBio.lastIndexOf("Hassan"));

// const myBio = "My name is Hassan Khan";
// console.log(myBio.search("hassan"));

// Extracting string parts
// There are 3 method
// slice
// substring
// substr

// // slice() method include start number but not include end given number
// // origional array do not change
// var str = "Apple,banana,kiwi,mango";
// // let res = str.slice(7, -2);
// // let res = str.slice(0, 5);
// let res = str.slice(7);
// console.log(res);

// challange time
// let mytweets = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolore quae eligendi autem corrupti facere minima ipsam voluptates doloribus perspiciatis accusamus, exercitationem possimus omnis laborum dolorem ipsa esse quod magnam.";
// let myactual = mytweets.slice(0, 280);
// console.log(mytweets.length);
// console.log(myactual);

// substring is similar to slice but it does not accept negative index
// let mystr = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolore quae eligendi autem corrupti facere minima ipsam voluptates doloribus perspiciatis accusamus, exercitationem possimus omnis laborum dolorem ipsa esse quod magnam.";
// let actual = mystr.substring(60, -2); //it do not accept 0 index
// console.log(actual);

// concat method()
// let fname = "Hassan";
// let lname = "Khan";
// console.log(`${fname} ${lname}`);
// console.log(fname.concat(lname));
// console.log(fname + lname);
// var str = "        Hellow World        ";
// console.log(str.trim()); //trip method remove white space at starting and end points


// Date and Time
// let currentdate = new Date();
// console.log(currentdate);
// console.log(new Date().toLocaleString());
// var d = new Date(2021, 11, 5, 33, 30, 0);
// console.log(d.toLocaleString());
// let currtime = new Date();
// console.log(currtime.setHours(5));
// console.log(currtime.setMinutes(5));
// console.log(currtime.setSeconds(5));
// console.log(currtime.setMilliseconds(5));

// math Objects
// console.log(Math.PI);
// let num = 10.400;
// console.log(Math.round(num));
// console.log(Math.pow(4, 5));
// console.log(4 ** 5);
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(49));
// console.log(Math.abs(-55));
// console.log(Math.abs(-999));
// console.log(Math.abs(4 - 6));
// console.log(Math.ceil(99.1));
// console.log(Math.floor(99.1));
// console.log(Math.max(19, 40, 30, 30, 100, 94));

// DOM IN JAVASCRIPT

// Window VS Document

// Window is a main container or we can say the global objects and operation related to entire browser window can be a part of window objects

// Document is the DOM is the child of window Object

// aLL THE member like objects propertiesif they are the part of window object then we not refer the window objects since window is the golbal object

// Where in the Dom we need to refer the document if we want to use the document object method otr properties
// BOM is the browser object model it deals with browser component like history, location etc

// document.documentElement
// it is show the root element of DOM
// document.body.style.background="red";
// document.body.childNodes; //check in consoles
// it show the childnodes of dom
// document.body.firstElementChild;


// const childTwo=document.querySelector('.child-two');
// childTwo.style.color="yellow";

// use to serch parent nodes and sibblings

// document.nextSibling;
// document.previousSibling;

// what is object litrel\
// Object litrel is simply a key value: pair data structure;
// sorting variable and function togather in one container 
// we can refer  this  an an object
// sorting variable and
// function togather in one container
// we can refer this as an object

// 1st way
// let biodata = {
//         myname: "Hassan",
//         myage: "20",
//         getdata: function() {
//             console.log(`My name is ${biodata.myname} and my age is ${biodata.myage} `);
//         }
//     }
// console.log(biodata.myname);
// console.log(biodata.getdata());
// 2nd way
// let biodata = {
//     myname: "Hassan",
//     myage: "20",
//     getdata() {
//         console.log(`My name is ${biodata.myname} and my age is ${biodata.myage} `);
//     }
// }
// biodata.getdata();
// 3rd way
// let biodata = {
//     Name: {
//         myname: "Hassan",
//         myNickname: "Quresh khan"
//     },
//     myage: 26,
//     getdata() {
//         console.log(` my name is ${biodata.Name} and my age is ${biodata.myage}`);
//     }
// }
// console.log(biodata.Name.myNickname);

// what is this object

// the defination of this object is that it contain the current context.
// console.log(this); // it show window context
// console.log(this.alert('awsome'));

// 2nd way

// const myfunction = () => {
//     console.log(this);
// }
// myfunction();
// let mynames = 'Hassan';
// const myfunction = () => {
//     console.log(this.mynames);
// }
// myfunction();

// 4th way

// const obj = {
//     myage: 20,
//     myname() {
//         console.log(this);
//     }
// }
// obj.myname();
// this method does not work in arrow fat function
// 11:23 Array destructing

// creating a caleculator
// call back
// function and heigh order
// function
// const add = (a, b) => {
//     return a + b;
// }
// const sub = (a, b) => {
//     return Math.abs(a - b);
// }
// const mul = (a, b) => {
//     return a * b;
// }

// const cal = (num1, num2, operator) => {
//     return operator(num1, num2);
// }
// console.log(cal(30, 40, sub));

// Hoisting avoid let keyword
// console.log(myname);
// let myname;
// myname = "Hassan";

// scope chain and lexical scoping in javascript  12:38
// const PI = 3.14 // Lexical scoping means directly read variables

// // "use strict" 
// x = "Hassan";
// console.log(x);

// synchronous prog in javascript
// first in first out
// work1=10min
// work2=5s;
// in synchronous prog we will wait 10min for 5s work it is too rude
// it work step by step
// const fun2 = () => {
//     console.log('Function 2 is called');
// }
// const fun1 = () => {
//     console.log("Function 1 is called");
//     fun2();
//     console.log("Function 1 is called");
// }
// fun1();
// async prog in javascript;
// in which

// function not stop it excute other works
// const fun2 = () => {
//     setTimeout(() => {
//         console.log('Function 2 is called');
//     }, 2000);

// }
// const fun1 = () => {
//     console.log("Function 1 is called");
//     fun2();
//     console.log("Function 1 is called");
// }
// fun1();

// what is event loop 13:10

// function currying
sum(5)(3)(8);
// how to solve these type of problem
// huge diffrence
sum(5, 3, 8);

function sum(num1) {
    // console.log(num1);
    return function(num2) {
        // console.log(num1, num2);
        return function(num3) {
            // console.log(num1, num2, num3);
            console.log(num1 + num2 + num3);
        }
    }
}
// 2 nd way to write
// const sum1 = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
// sum1(5)(3)(8);

// callback hell

// JSON 

var myobj = { key_1: "Hassan", key_2: true, key_3: 5 };
var object_as_string = JSON.stringify(myobj);
// console.log(object_as_string);

// JSON parse turns a string of jason text into a javascript object
// var object_as_string = JSON.parse(object_as_string);
// console.log(object_as_string);
// typeof(object_as_string);

// sum(5)(8)(9);
// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
// sum(10)(5)(6);