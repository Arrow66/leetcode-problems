# Last updated: 4/18/2026, 6:55:58 PM
1class Solution:
2    def fizzBuzz(self, n: int) -> List[str]:
3        array = []
4        for i in range(1,n+1):
5            if i% 15 ==  0:
6                array.append("FizzBuzz")
7            elif i % 3 == 0:
8                array.append("Fizz")
9            elif i % 5 == 0:
10                array.append("Buzz")
11            else :
12                array.append(str(i))
13        return array
14        