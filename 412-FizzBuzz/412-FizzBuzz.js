// Last updated: 4/17/2026, 12:40:19 AM
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let op = []
    for(let i=1;i<=n;i++)
        {
              if(i%3 ==0 && i%5 ==0)
                {
                    op.push("FizzBuzz")
                }
            else if(i%3 == 0)
                {
                    op.push("Fizz")
                }
            else if(i%5 == 0)
                {
                    op.push("Buzz")
                }
          
            else
                {
                    op.push(`${i}`)
                }
        }
    return op
    
};