// Last updated: 4/17/2026, 12:40:30 AM
function twoSum(nums: number[], target: number): number[] {


    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i] + nums[j] == target)
            {
              
                return  [i,j];
            }
        }
    }    

};