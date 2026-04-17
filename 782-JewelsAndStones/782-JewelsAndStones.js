// Last updated: 4/17/2026, 12:40:16 AM
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;

    for(let i=0;i<stones.length;i++)
        {
           if(jewels.includes(stones[i]))
               {
                   count++
                   
}
                    
            
        }
    
    return count 
    
};