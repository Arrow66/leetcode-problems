// Last updated: 4/17/2026, 12:40:15 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = []
    output[0] = nums[0];
    for(let i=1;i<nums.length;i++)
        {
            output[i] = output[i-1]+ nums[i]
        }
    return output 
    
};