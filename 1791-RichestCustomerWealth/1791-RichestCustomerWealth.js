// Last updated: 4/17/2026, 12:40:13 AM
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    let sum = 0;
    for(let i of accounts)
        {
            sum = 0;
            
            for(let j of i)
                {
                    
                    sum+=j;
                    
                    
                    
                }
            
              if(max<sum)
        {
             max = sum ;
}
            
        }
  
    
    return max 
    
};