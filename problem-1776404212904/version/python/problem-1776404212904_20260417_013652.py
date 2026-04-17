# Last updated: 4/17/2026, 1:36:52 AM
1class Solution:
2    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
3        """
4        Do not return anything, modify nums1 in-place instead.
5        """
6        i,j,k = m-1,n-1,len(nums1) -1 
7
8        while i >= 0 and j >= 0:
9            if nums1[i] > nums2[j]:
10                nums1[k] = nums1[i]
11                i -=1
12            else:
13                nums1[k] = nums2[j]
14                j -=1
15            k -=1
16        while j >= 0:
17            nums1[k] = nums2[j]
18            j -= 1
19            k -= 1 
20
21
22
23
24
25
26        
27
28
29        