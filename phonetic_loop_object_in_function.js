// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = lookup[val];
  // Only change code above this line

  return result;
}

// Added a global object so we can reference it outside the function:
const globalLookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank"
};

let bar = phoneticLookup(globalLookup["charlie"]);
console.log(bar);

function checkObj(obj, checkProp) {
  // Only change code below this line

  if (obj.hasOwnProperty("checkProp")) {
    return checkProp;
  } else {
    return "Not Found";
  }

  // Only change code above this line
}

const obj = {
  checkProp: 7
};

if (obj.hasOwnProperty("checkProp")) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
