let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3: 
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K': 
    case 'A':
      count--;
      break;
  }
 
  var holdBet = "Hold"; 

  if (count > 0) {
    holdBet = "Bet"; 
  }
return count + " " + holdBet; 

  // Only change code above this line
}


console.log(cc(8)); 