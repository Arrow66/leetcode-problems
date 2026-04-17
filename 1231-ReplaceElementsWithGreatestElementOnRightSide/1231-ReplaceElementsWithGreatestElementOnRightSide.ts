// Last updated: 4/17/2026, 12:40:13 AM
function replaceElements(arr: number[]): number[] {

   let n  = arr.length;
   let finalArray = [];
   if(n === 1)
   {
       return [-1];
   }
   let max ;
    for(let i=0;i<n;i++)
    {
        max = 0;
        for(let j=i+1;j<n;j++)
        {
            if(arr[j] > max)
            {
                max  = arr[j] ;
            }
        }
                    console.log(max);
        if(max  == 0)
        {
               finalArray.push(-1);
        }

        else
        {
        finalArray.push(max);

        }

    }
 
    return finalArray;
};