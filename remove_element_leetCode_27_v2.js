var myNums = [1,2,3,3,4,5,6]; 
var myVal = 5; 

var removeElement = function (nums,val) { 
    let j = 0; 
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== val){
            nums[j++] == nums[index];
            console.log("index is: " + index ); 
            console.log("j is: " + j);
        }
    }
    return j; 
}

console.log(removeElement(myNums,myVal)); 


