// Last updated: 4/17/2026, 12:40:17 AM
function pivotIndex(nums: number[]): number {

//[1,7,3,6,5,6]
//3

let leftsum = 0;
let totalsum = 0;

    for(let i=0;i<nums.length;i++)
    {
       totalsum+=nums[i];
    }

    for(let j=0;j<nums.length;j++)
    {
        totalsum = totalsum - nums[j]; //right sum
        if(totalsum == leftsum)
        {
            return j;
        }
        leftsum+=nums[j];

    }

    return -1;


};