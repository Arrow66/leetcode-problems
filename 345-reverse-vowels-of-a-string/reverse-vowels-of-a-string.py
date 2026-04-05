class Solution:
# leetcode
# "leotcede"
    def reverseVowels(self, s: str) -> str:
        l = list(s)
        start = 0
        end = len(l) -1
        while(start < end):
            if(l[start].lower() in ['a','e','i','o','u']):
                if(l[end].lower() in ['a','e','i','o','u']):
                    l[start], l[end] = l[end], l[start]
                    start += 1
                    end -= 1
                else:
                    end -= 1
            else:
                start += 1
        return "".join(l)


                    

        