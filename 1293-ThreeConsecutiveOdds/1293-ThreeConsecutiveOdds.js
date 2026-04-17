// Last updated: 4/17/2026, 12:40:10 AM
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let ret = false;
    let oddCount  = 0;
    if(arr.length <3)
        {
            return false;
        }
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]%2 !== 0)
                {
                    oddCount ++;
                }
            else
                {
                    oddCount = 0;
                }
            if(oddCount>=3)
                {
                    ret = true;
                    break;
                }
            
        }
    
    return ret;
    
};