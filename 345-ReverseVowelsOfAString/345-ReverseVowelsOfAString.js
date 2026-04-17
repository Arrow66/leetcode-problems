// Last updated: 4/17/2026, 12:40:23 AM
/**
 * @param {string} s
 * @return {string}
 */


var reverseVowels = function(s) {
    let output = s.split("");
    
const isVowel = (c)=>{
        return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' );

    
}
let start =0;
    let end = s.length-1;
for(let i=0;start<end;i++)
    {
        if(!isVowel(output[start]))
            {
                start++;
                
             continue;  
                
            }
        else if(!isVowel(output[end]))
        {
            end--;
            continue;
        }
        else
            {
                [output[start],output[end]] = [output[end],output[start]];
                start++;
                end--;
            }
    }
    console.log(output.join(""))
    return output.join("")
    
};