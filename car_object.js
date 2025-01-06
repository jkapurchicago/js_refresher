const car = { 
    type: "Fiat", 
    mode: "500", 
    color: "white"
};

car.color = "red"; 

car.owner = "Johnson"; 

console.log(car); 

/*
for (i = 0; i < 15; i++) { 
    console.log(i);
    if (i === 5) {
        break; 
    }  
}

*/
for (i = 0; i < 10; i++) {
    if (i == 5) {
        i+=2;
  continue;
 

    }
    console.log(i);
  }