# Last updated: 4/17/2026, 12:40:21 AM
class Solution:
    def reverseVowels(self, s: str) -> str:

        vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
        l = list(s)
        start, end = 0, len(l) - 1
        
        while start < end:
            while start < end and l[start] not in vowels:
                start += 1
            
            while start < end and l[end] not in vowels:
                end -= 1
            
            l[start], l[end] = l[end], l[start]
            start += 1
            end -= 1
            
        return "".join(l)


                    

        