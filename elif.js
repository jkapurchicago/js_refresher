/*
function testElse(val) {   
  let result = ""; 

  if (val > 5) { 
    result = "Bigger than 5"; 
    
  } 
  else if(val < 4 ) { 
    result  = "Less than 5";     
  }
  return result; 
}


let caseOne = testElse(6); 
let caseTwo = testElse(4); 

console.log(caseOne);
console.log(caseTwo);  

*/ 

function NumberChecker(val) { 

let result = ""; 

if (val > 5) {
  result = "Bigger than 5"; 
} else if (val < 4) {
  result = "Less than 5"; 
} else if (val == 4) { 
  result = "The number is 4";
} else   { 
  result = "The number is 5"
}
 return result; 
} 

let car = NumberChecker(3); 
let airpod = NumberChecker(4); 
let book = NumberChecker(5); 
let dragon = NumberChecker(6); 
console.log("3 car is: " + car); 
console.log("4 airpod is: " + airpod); 
console.log("5 book is:" + book); 
console.log("6 dragon is:" + dragon); 


/* 
-2, -1, 0, 1, 2, 3,    is Less than 4 
                    4, 5, 
                          6, 7, 8, 9  is Bigger than 5 



*/ 