# JavaScript Cheat Sheet 

## Arrays 



**dsd cdcd dcd dcdd dcd**

Creation of the Array is done as: 

***
const myArray = [["John", 23], ["dog", 3]];

myArray.shift();
myArray.unshift(["Paul" , 35]); 




Functions

Const myArray = [1, 2,3]; 

push - add to the last element to the array 
pop  - remove from the last element of the array 
 

unshift = adds elements from the beginning of the array 
shift  =  removes element from beginning of the Array 

``` javascript 

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
``` javascript 

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
