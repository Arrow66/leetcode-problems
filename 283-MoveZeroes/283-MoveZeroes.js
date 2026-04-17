// Last updated: 4/17/2026, 12:40:20 AM
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let newArray = nums
    let length = nums.length;
    for(let i=0,j=0;i<nums.length;i++)
        {
           if(!newArray[i] == 0)
               {
                  [newArray[i],newArray[j]] = [newArray[j],newArray[i]]
                   j++
               }
        }
    
    return newArray
    
};