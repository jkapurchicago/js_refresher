function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1){ 
      return "Hole-in-one!"; 
    } else if (strokes <= par - 2 ){ 
      return "Eagle";
    } else if (par - 1) {
      return "Birdie"; 
    } else if (par) { 
      return "par"; 
    } else if (par + 1 ) {
      return "Bogey"; 
    } else if (par + 2){ 
      "Double Bogey"; 
    } else if (strokes >= par + 3) { 
      return "Go Home!"; 
    } else { 
    return "Change Me";
    // Only change code above this line
   }
}

let a  = golfScore(5, 4);
let b = golfScore(4, 4); 
let c = golfScore(5, 5); 
let d = golfScore(4, 5); 
let e = golfScore(4, 6); 
let f = golfScore(4, 7);
let g = golfScore(5, 9); 

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);


  

