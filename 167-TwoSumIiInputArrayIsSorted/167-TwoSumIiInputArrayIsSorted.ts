// Last updated: 4/17/2026, 12:40:27 AM
function twoSum(numbers: number[], target: number): number[] {

    let left = 0;
    let right  =  numbers.length -1 ;

while(left <=right)
{
    if(numbers[left] + numbers[right] == target)
    {
        return [left+1,right+1];
    }
    else if(target > numbers[left] + numbers[right])
    {
        left++
    }
    else
    {
        right--
    }
}

};