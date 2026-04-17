// Last updated: 4/17/2026, 12:40:20 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let count =1;
    let majority = nums[0];
    for(let i=1;i<nums.length;i++)
        {
            if(nums[i] == majority)
                {
                    count++;
                }
            else
                {
                    count -- 
                }
            if(count == 0)
                {
                    majority = nums[i];
                    count = 1;
                    
                }
            
            
        }
    return majority;
    
};