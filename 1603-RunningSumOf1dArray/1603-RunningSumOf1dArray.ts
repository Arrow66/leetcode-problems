// Last updated: 4/17/2026, 12:40:12 AM
function runningSum(nums: number[]): number[] {
    let sumarray = [nums[0]];
    for(let i=1;i<nums.length;i++)
    {
        sumarray[i] = sumarray[i-1] + nums[i];
    }
    return sumarray;
};