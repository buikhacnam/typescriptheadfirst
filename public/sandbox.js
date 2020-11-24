"use strict";
console.log("hello world");
console.log("hi world");
//cannot change the value if it doesnt match the type
let character = "mario";
let age = 30;
let isBlackBelt = false;
//you cannot do this:
//character = 23; or age = "sdg" or isBlackBelt = 34;
// you can only do this:
age = 18;
//difine a type of value
//only allow number for example
const circ = (diameter) => {
    return diameter * Math.PI;
};
//console.log(circ("hello")) error obviously
console.log(circ(20)); //good job.
//About array:
let names = ["drogba", "lampard", "terry"];
// names.push(11) error
names.push("Cech"); //good
//if you want to have more type of values, you need to initialize in the array first
let mix = [11, "drogba", true];
//About Object: same!
// explicit types:
// mean that I put a placeholder of the type of value:
let word;
let ninja = []; //array of only string
let oneObject;
let oneObject2;
//so you can do this:
oneObject2 = { name: "drogba", age: 38, beltColour: "trueblue" };
//not this: 
//oneObject2 = {name: "drogba", age: 38, beltColour: true, wife: "serena"};
//union types
let mixedArry = [];
let mixedcharacter;
//any
let anything = 25;
anything = true;
anything = "ok";
let anyArray = [];
let anyObject;
// Function
let greet;
// you cannot do this:
// greet = "hello";
// you can do this:
greet = () => {
    console.log("hello");
};
const add = (a, b) => {
    console.log(a + b);
};
//so you can only do this:
add(1, 2);
const add1 = (a, b, c) => {
    console.log(a + b);
};
//so you can only do this:
add1(1, 2, 3);
add1(1, 2, "hello");
//optional parameters
const add3 = (a, b, c) => {
    console.log(c);
};
// c = 3;
add3(1, 2, 3);
// c = "undifined"
add3(1, 2);
//default parameters
const add4 = (a, b, c = 10) => {
    console.log(c);
};
// c = 3;
add3(1, 2, 3);
// c = 10
add3(1, 2);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// you cannot do this:
//result = "hehe"
//if you want to know quicky what type of value will be return, do this:
const minus1 = (a, b) => {
    return a + b;
};
let result1 = minus1(10, 7);
//if you want to know quicky that the function will return nothing, use void:
const minus2 = (a, b = 10) => {
    console.log(a + b);
};
let result2 = minus2(10);
//class9: Type Aliases:
const logDetails = (uid, item) => {
    //do something here
};
const greet1 = (user) => {
    // do something here
};
const greet2 = (user) => {
    // do something here
};
const greet3 = (user) => {
    // do something here
};
//Signature Function:
// example 1
let gree;
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
