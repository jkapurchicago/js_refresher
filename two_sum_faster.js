const nums = Array.from({length: 6}, () => Math.floor(Math.random() * 30));

console.log("The Random Original Nums Array: " + nums); 

//nums.sort();

//console.log("The Sorted nums array is sorted : " + nums); 

//target = Math.floor(Math.random() * 10); 

alpha = Math.random(); 
console.log("The alpha is: " + alpha);

beta = alpha * 10; 
console.log("The beta is: " + beta); 

gamma = Math.floor(beta); 
console.log("The gamma is: " + gamma); 

var target = gamma; 
console.log(`The target ${target} The target is now set. Mission is a Go!!`);  



function TwoSum(nums, target) { 
    var x = 'data'; 
    saying = ""; 
    console.log(nums); 

    for(i = 0; i < nums.length; i++) {
        for(j = 1; j < nums.length; j++) {
            var z = i + j; 
            //console.log("The i is: " + i + "The j is: " + j + " Finally, i + j is: " + z);
            var checkerOne = i; 
            var checkerTwo = j; 
            var ball = nums[checkerOne]; 
            var cat = nums[checkerTwo]; 
            var car = nums[checkerOne] + nums[checkerTwo]; 
            console.log("The i is: " + ball + "The j is: " + cat + " Finally, i + j is: " + car);
            if (ball + cat === target) { 
                
               saying = "Target Found "; 
               break; 
            }
    }
}
    return saying; 
}

console.log(TwoSum(nums,target)); 