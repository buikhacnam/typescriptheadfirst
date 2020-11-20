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
