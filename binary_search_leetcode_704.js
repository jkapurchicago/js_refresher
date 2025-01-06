var search = function(nums, target) {

   // let left = 0; 
   // let right = nums.length - 1; 

   while(left <= right) { 
    let middle = Math.floor((left + right) /2); 
    let potentialMatch = nums[middle]; 
    if (potentialMatch === target){
        return middle; 
    } else if (potentialMatch > target ) {
        right = middle -1; 
    } else {
        left = middle + 1; 
    }
    
   }
    return -1
};



nums = [-3, -2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 33, 45 ,47]

console.log(nums.length); // 18

let left = 0; 
let right = nums.length - 1; //17 
let middle = Math.floor((left + right) /2); 
let potentialMatch = nums[middle]; 

console.log(potentialMatch); 
console.log(right); 
console.log(middle); 


target = 11; 
/* 
Time Complexity
Space Complexity 
Pseudo Code: 
    1. Create a Variable left as a left pointer 
    2. Create a variable right as a right pointer 
    3. Create while loop for while left < = right 
        a. Create a middle variable by adding right and left/2 and round down 
        b. Create potential match varibale with index of middle 
        c. Create Conditon if potential match = target, return the middle 
        d. Create Condition if potential match is greater than target, change right pointer to middle - 1
        e. create condition if potential match is less than target, change left pointer to middle + 1 
4. Return -1  

*/ 