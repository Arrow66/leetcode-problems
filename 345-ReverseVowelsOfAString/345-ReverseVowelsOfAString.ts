// Last updated: 4/17/2026, 12:40:22 AM
function reverseVowels(s: string): string {

    let start = 0;
    let end  =  s.length -1;
    let stringArray =  s.split("");

    const checkVowel = (c:string):boolean=>{
            return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' );

    }
    
    while(start < end)
    {
        if(!checkVowel(stringArray[start]))
        {
            start++;
            continue;
        }

                if(!checkVowel(stringArray[end]))
        {
            end--;
            continue;
        }

        let temp = stringArray[start];
        
          stringArray[start]       = stringArray[end];

          stringArray[end] =  temp;

    start++;
    end--;
    }

    return stringArray.join("");

};

