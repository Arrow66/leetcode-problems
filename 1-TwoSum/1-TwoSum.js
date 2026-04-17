// Last updated: 4/17/2026, 12:40:29 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

let map = new Map();
        for(let i = 0; i<nums.length;i++)
        {
            let diff  = target  - nums[i];
            if(map.has(diff))
            {
                return [map.get(diff),i]
            }
            map.set(nums[i],i) 
        }
        return []


    
};