/// ### Creation of an Array ###
const nums = Array.from({length: 6}, () => Math.floor(Math.random() * 10));

console.log("The Random Original Nums Array: " + nums); 

// ### Picking a Target ###
alpha = Math.random(); 
console.log("The alpha is: " + alpha);

beta = alpha * 10; 
console.log("The beta is: " + beta); 

gamma = Math.floor(beta); 
console.log("The gamma is: " + gamma); 

var target = gamma; 
console.log(`The target ${target} The target is now set. Mission is a Go!!`);  


function TwoSum(nums, target) { 
  
    saying = ""; 
    for(i = 0; i < nums.length; i++) {
        for(j = 1; j < nums.length; j++) {
            var z = i + j; 
            //console.log("The i is: " + i + "The j is: " + j + " Finally, i + j is: " + z);  
            var ball = nums[i]; 
            var cat = nums[j]; 
            var car = nums[i] + nums[j]; 
            //console.log("The i is: " + ball + "  The j is: " + cat + " Finally, i + j is: " + car);
            if (ball + cat == target) { 
                console.log("The i is: " + ball + "  The j is: " + cat + " Finally, i + j is: " + car);
                saying = "Target Found "; 
               //break; 
            } else {
                saying = " No Target Found ";  
            }
    }
}
    return saying; 
}

console.log(TwoSum(nums,target)); 