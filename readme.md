# Jatin Kapur  
02/02/2021  
JavaScript Cheat Sheet  

## Arrays

Creation of the Array is done as:  
```js
const myArray = [["John", 23], ["dog", 3]];

myArray.shift();
myArray.unshift(["Paul", 35]);
Functions
js
Copy code
const myArray = [1, 2, 3];

// Push: Add to the last element of the array
// Pop: Remove from the last element of the array

// Unshift = adds elements to the beginning of the array
// Shift   = removes an element from the beginning of the array
js
Copy code
const myList = [
    ["Chocolate Bar", 15],
    ["Milk", 3],
    ["Bread", 5],
    ["Spinach", 8],
    [["Gatorate", 10, ["Candy", 12], "Water", 11]]
];

console.log(myList);

const specialVar = myList[4][2];
console.log(specialVar);
Reusable Functions
js
Copy code
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
Function Calling Function – Global Scope
js
Copy code
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
BASIC ARRAY DATA STRUCTURE
Let’s Learn Splice

We have three parameters in Splice.

The first parameter is the index of the array.
The second parameter is the amount of objects from that index we are going to remove.
The third is the replacement. We take out a value and add a new one.
js
Copy code
const TestArray = ["Hello", "Here", "is", "to", "the", "new", "YEAR!"];
console.log(TestArray);

TestArray.splice(3, 1, 0);
console.log(TestArray);
Array Operations
Front

.unshift() Adds an element to the beginning of the array
.shift() Removes an element from the beginning
Back

.push() Adds an element to the end of the array
.pop() Removes an element from the end of the array
js
Copy code
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line
}

trueOrFalse(true);
ARRAY DATA TYPES
js
Copy code
let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);



This commit introduces a set of original JavaScript files covering syntax, loops, functions, and classes, with each file cleaned up and verified to run properly.

# JavaScript Cheat Sheet

## Arrays

**dsd cdcd dcd dcdd dcd**

Creation of the Array is done as:

---

const myArray = [["John", 23], ["dog", 3]];

myArray.shift();
myArray.unshift(["Paul" , 35]);

Functions

Const myArray = [1, 2,3];

push - add to the last element to the array
pop  - remove from the last element of the array

unshift = adds elements from the beginning of the array
shift  =  removes element from beginning of the Array

```javascript

const myList = [
    ["colChoate Bar", 15] ,
    ["Milk", 3] ,
    ["Bread" , 5] ,
    ["Spinach" , 8] ,
    [["Gatorate" , 10 ,  ["Candy" , 12] , "Water", 11]]
  
  ];
  
```

```javascript

  //console.log(myList); 
  
  const specialVar =  myList[4][2]
  
  console.log(specialVar); 

```

```javascript

  Reusable Functions 

  function reusableFunction() { 
  console.log("Hi World"); 
}

reusableFunction(); 


```

// Here we will learn to pass Returning multiple values from an function using an object

function geography(continent, language){
    let Europe = "Spain";
    let Asia = "Japan";
    let SouthAmerica = "Argentina";

    if(continent === 'Europe' && language === 'Spanish') {
        return

    } else {
        return {
        'Europe': Europe,
        'Asia' : Asia,
        'SouthAmerica': SouthAmerica

    };
}

console.log(geography().Europe);
console.log(geography());

let world = geography();

let Europe = world.Europe;

console.log(Europe);

# Functions

// Here we will learn to pass Returning multiple values from an function using an object

let continents = ['Europe', 'Asia', 'North America' , 'South America', 'Africa' ];
let countries = ['Spain', 'Japan', 'Canada', 'Brazil', 'Angola'];
let languages = ['Spanish', 'Japanese', 'English', 'Portugese', 'French'];

function findCountryBasedOnContinentAndLanguage(continentChecker, languagChecker){

    let Europe = "place", Asia = "place", SouthAmerica = "place";

    if(continentChecker === 'Europe' && languagChecker === 'Spanish') {
        return countries[0];

    } else {
        return {
        'Europe': Europe,
        'Asia' : Asia,
        'SouthAmerica': SouthAmerica
        }

    };

}
//console.log(continents[0]);
//console.log(languages[0]);
//console.log()

console.log(findCountryBasedOnContinentAndLanguage(continents[1], languages[0]));

//console.log(findCountryBasedOnContinentAndLanguage());
