// Last updated: 4/17/2026, 12:40:27 AM
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length-1;
    while(i<j)
    {
        const val  =  numbers[i] + numbers[j];
        if(val === target )
        {
            return [i+1,j+1]
        }
        if(val > target)
        {
            j--
        }
        else
        {
            i++
        }
    }
};