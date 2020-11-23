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


// Function
let greet: Function;
// you cannot do this:
// greet = "hello";

// you can do this:
greet = () => {
    console.log("hello");
}

const add = (a:number, b:number) => {
    console.log(a + b);
}
//so you can only do this:
add(1, 2);

const add1 = (a:number, b:number, c: number|string) => {
    console.log(a + b);
}
//so you can only do this:
add1(1, 2, 3); 
add1(1, 2, "hello");

//optional parameters
const add3 = (a: number, b: number, c?: number) => {
    console.log(c);
}
// c = 3;
add3(1, 2, 3);

// c = "undifined"
add3(1, 2);

//default parameters
const add4 = (a: number, b: number, c: number = 10) => {
    console.log(c);
}
// c = 3;
add3(1, 2, 3);

// c = 10
add3(1, 2);


const minus = (a: number, b: number) => {
    return a + b;
  }
  
  let result = minus(10,7);
// you cannot do this:
//result = "hehe"

//if you want to know quicky what type of value will be return, do this:
const minus1 = (a: number, b: number): number => {
    return a + b;
  }
  
  let result1 = minus1(10,7);


//if you want to know quicky that the function will return nothing, use void:
const minus2 = (a: number, b: number = 10):void=> {
    console.log(a + b);
  }
  
  let result2 = minus2(10);


  //class9: Type Aliases:

  const logDetails = (uid: string | number, item: string) => {
      //do something here
  }


const greet1 = (user: {name: string, uid: string | number}) => {
    // do something here
}

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum}

const greet2 = (user: {name: string, uid: StringOrNum}) => {
    // do something here
}

const greet3 = (user: objWithName) => {
    // do something here
}

//Signature Function:
// example 1
let gree: (a: string, b: string) => void;

gree = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetail: (obj: {name: string, age: number}) => void;

logDetail = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}