// Last updated: 4/17/2026, 12:40:18 AM
function subarraySum(nums: number[], k: number): number {
let sum  = 0;
let count  = 0;
     for(let i=0;i<nums.length;i++)
     {
        //  [1,2,1,2,1]
         sum =0;
         for(let j=i;j<nums.length;j++)
         {
                sum+=nums[j]
                if(sum == k)
                {
                    
                    count++;
                }

                          

         }
     }
     return count;

};