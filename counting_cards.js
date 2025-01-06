let myCount = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      myCount++;
      // console.log("Part A: " + myCount);
      break;
    case 7:
    case 8:
    case 9:
      myCount;
      // console.log("Part B: " + myCount);
      break;
    case '10':
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      myCount--;
      // console.log("Part C: " + myCount);
      break;
  }

  if (myCount > 0) {
    return myCount + " Bet";
  } else if (myCount <= 0) {
    return myCount + " Hold";
  }
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

console.log(cc(3));

let myCount2 = 0;

function cc2(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      myCount2++;
      break;
    case 7:
    case 8:
    case 9:
      myCount2;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      myCount2--;
      break;
  }

  var holdBet = "Hold";
  if (myCount2 > 0) {
    holdBet = "Bet";
  }
  // Only change code above this line
}
