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

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

//console.log(circ("hello")) error obviously
console.log(circ(20)); //good job.


//About array:

let names = ["drogba", "lampard", "terry"];

// names.push(11) error
names.push("Cech") //good

//if you want to have more type of values, you need to initialize in the array first
let mix = [11, "drogba", true];

//About Object: same!

// explicit types:
// mean that I put a placeholder of the type of value:
let word: string;
let ninja: string[] = [] //array of only string
let oneObject: object;
let oneObject2: {
    name: string,
    age: number,
    beltColour: string
}
//so you can do this:
oneObject2 = {name: "drogba", age: 38, beltColour: "trueblue"};
//not this: 
//oneObject2 = {name: "drogba", age: 38, beltColour: true, wife: "serena"};

//union types
let mixedArry: (string|number|boolean)[] = []; 
let mixedcharacter: string|number|boolean;

//any
let anything: any = 25;
anything = true;
anything = "ok";

let anyArray: any[] = [];
let anyObject: {name: any, age: any};





