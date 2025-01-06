const nums = Array.from({length: 100}, () => Math.floor(Math.random() * 79));

console.log("The Random Original Nums Array: " + nums); 

nums.sort();

console.log("The Sorted nums array is sorted : " + nums); 

//target = Math.floor(Math.random() * 10); 

alpha = Math.random();
console.log("The alpha is: " + alpha);

beta = alpha * 10; 
console.log("The beta is: " + beta); 

gamma = Math.floor(beta); 
console.log("The gamma is: " + gamma); 

var target = gamma; 
console.log(`The target ${target} The target is now set. Mission is a Go!!`);  

var a , b , c, d, e, f; 

a = nums[0]; 
b = nums[1]; 
c = nums[2]; 
d = nums[3]; 
e = nums[4]; 
f = nums[5]; 

console.log(a,b,c,d,e,f); 

function TwoSum(a,b,c,d,e,f,target) { 
    saying = ""; 
    if (a + b === target){
        saying = "It is a + b";
    } else if (a + c === target) { 
        saying = "It is a + c";
    } else if (a + d === target) {
        saying = "It is a + d";
    } else if (a + e === target) {
        saying = "It is a + e";
    } else if (a + f === target) {
        saying = "It is a + f";
    } else if (b + c === target) {
        saying = "It is b + c";
    } else if (b + d === target) {
        saying = "It is b + d";
    } else if (b + e === target) {
        saying = "It is b + e";
    } else if (b + f === target) {
        saying = "It is b + f";
    } else if (c + d === target) { 
        saying = "It is c + d";
    } else if (c + e === target) { 
        saying = "It is c + e";
    } else if (c + f === target) {
        saying = "It is c + f";
    } else if (d + e === target) {
        saying = "It is d + e";
    } else if (d + f === target) {
        saying = "It is d + f";
    } else if (e + f === target) { 
        saying = "It is e + f";
    } else {
        saying = "Target is not in Array!!!!!!"; 
    }
 return saying;
}

console.log(TwoSum(a,b,c,d,e,f,target));



// EXTRA CODE
//var nums = [3, 6, 4, 9, 2, 1]; 
//nums.sort(); 

//console.log(nums); 
//const nums = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
//console.log(nums); 
