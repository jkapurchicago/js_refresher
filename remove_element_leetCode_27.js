var my_nums = [1,2,3,3,4,5,6]; 
var my_val = 4; 
var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }

    //nums.length = j; // Chop the surplus values - not needed for LC submission
    return j;
};


console.log(removeElement(my_nums,my_val)); 