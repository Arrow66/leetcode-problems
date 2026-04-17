// Last updated: 4/17/2026, 12:40:26 AM
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let revNumber  = 0;
    
   if(x<0 || (x % 10 == 0 && x != 0))
       {
           return false;
}
    
    while(x > revNumber)
        {
            revNumber  = (revNumber *10) + x %10 
            x = parseInt(x/10);
            console.log(revNumber,x)
}
  
    return x === revNumber || x === parseInt(revNumber/10);
    
};