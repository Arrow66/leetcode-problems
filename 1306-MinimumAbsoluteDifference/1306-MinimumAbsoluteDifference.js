// Last updated: 4/17/2026, 12:40:10 AM
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    let sortedArray = arr.sort((a,b)=>(a-b));
    let i=0;
    let m = Number.MAX_VALUE;
    let ret = {}
   while(i<sortedArray.length-1)
       {
           if(sortedArray[i+1]- sortedArray[i] <=m)
               {
                   m = sortedArray[i+1]- sortedArray[i];
                   if(ret[m])
                       {
                           ret[m].push([sortedArray[i],sortedArray[i+1]])
                       }
                   else
                       {
                           ret[m] = [[sortedArray[i],sortedArray[i+1]]];
                       }
               }
           
           
           i++
}

    console.log(ret)
    return ret[m];
    
};