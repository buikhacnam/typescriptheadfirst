"use strict";
console.log("hello world");
console.log("hi world");
//cannot change the value if it doesnt match the type
var character = "mario";
var age = 30;
var isBlackBelt = false;
//you cannot do this:
//character = 23; or age = "sdg" or isBlackBelt = 34;
// you can only do this:
age = 18;
//difine a type of value
//only allow number for example
var circ = function (diameter) {
    return diameter * Math.PI;
};
//console.log(circ("hello")) error obviously
console.log(circ(20)); //good job.
//About array:
var names = ["drogba", "lampard", "terry"];
// names.push(11) error
names.push("Cech"); //good
//if you want to have more type of values, you need to initialize in the array first
var mix = [11, "drogba", true];
//About Object: same!
// explicit types:
// mean that I put a placeholder of the type of value:
var word;
var ninja = []; //array of only string
var oneObject;
var oneObject2;
//so you can do this:
oneObject2 = { name: "drogba", age: 38, beltColour: "trueblue" };
//not this: 
//oneObject2 = {name: "drogba", age: 38, beltColour: true, wife: "serena"};
//union types
var mixedArry = [];
var mixedcharacter;
//any
var anything = 25;
anything = true;
anything = "ok";
var anyArray = [];
var anyObject;
// Function
var greet;
// you cannot do this:
// greet = "hello";
// you can do this:
greet = function () {
    console.log("hello");
};
var add = function (a, b) {
    console.log(a + b);
};
//so you can only do this:
add(1, 2);
var add1 = function (a, b, c) {
    console.log(a + b);
};
//so you can only do this:
add1(1, 2, 3);
add1(1, 2, "hello");
//optional parameters
var add3 = function (a, b, c) {
    console.log(c);
};
// c = 3;
add3(1, 2, 3);
// c = "undifined"
add3(1, 2);
//default parameters
var add4 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(c);
};
// c = 3;
add3(1, 2, 3);
// c = 10
add3(1, 2);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
// you cannot do this:
//result = "hehe"
//if you want to know quicky what type of value will be return, do this:
var minus1 = function (a, b) {
    return a + b;
};
var result1 = minus1(10, 7);
//if you want to know quicky that the function will return nothing, use void:
var minus2 = function (a, b) {
    if (b === void 0) { b = 10; }
    console.log(a + b);
};
var result2 = minus2(10);
//class9: Type Aliases:
var logDetails = function (uid, item) {
    //do something here
};
var greet1 = function (user) {
    // do something here
};
var greet2 = function (user) {
    // do something here
};
var greet3 = function (user) {
    // do something here
};
//Signature Function:
// example 1
var gree;
gree = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetail;
logDetail = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
