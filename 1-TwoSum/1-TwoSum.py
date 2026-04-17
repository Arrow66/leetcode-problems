# Last updated: 4/17/2026, 12:40:28 AM
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i,v in enumerate(nums):
            compliment = target - v 
            if compliment in seen:
                return [i,seen[compliment]]
            seen[v] = i






        