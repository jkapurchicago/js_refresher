/* 
let Rectangle = class { 
    constructor(height, width){ 
        this. height = height; 
        this.width = width; 
    }
}

console.log(Rectangle); 
console.log(Rectangle.name); 

Rectangle = class Rectangle2 { 
    constructor(height, width) {
        this. height = height; 
        this.width = width; 
    }
}


*/ 
class Person {
    name;
    height; 
    weight; 

    constructor(name, height, weight) {
      this.name = name;
      this.height = height; 
      this.weight = weight; 
    }

    introduceSelf() {
      console.log(`Hi! I'm ${this.name} , My height is ${this.height} , I weight ${this.weight} Pounds`);
      
    }
  
  }
  
  const Jatin = new Person("Jatin","10","185"); 
  Jatin.introduceSelf(); 
  

  const Savita = new Person("Savita", "5Ft 3 Inches", "130"); 
  Savita.introduceSelf(); 