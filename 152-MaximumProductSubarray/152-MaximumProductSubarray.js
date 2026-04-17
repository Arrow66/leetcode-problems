// Last updated: 4/17/2026, 12:40:23 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res  = -Infinity;
       let pre   = 1;
        let suf  =  1;

   for(let i = 0; i<nums.length;i++)
   {   
        
           if(pre == 0 )
           {
               pre  = 1
           }

           if(suf  == 0)
           {
               suf  = 1;
           }

           pre  = pre * nums[i];
           suf  =  suf * nums[nums.length - i -1]

           res  = Math.max(res,pre,suf);

    
   }
    return res  === -Infinity ? 0 : res;
};