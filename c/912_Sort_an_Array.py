from typing import List

class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        return self.mergeSort(nums,0,len(nums)-1)

    def mergeLists(self, arr1,arr2):
        mergeArr=[]
        i,j=0,0
        n1,n2=len(arr1),len(arr2)

        while i<n1 and j<n2:
            if arr1[i] <= arr2[j]:
                mergeArr.append(arr1[i]);i+=1
            else:
                mergeArr.append(arr2[j]);j+=1
        
        while i<n1:
            mergeArr.append(arr1[i]);i+=1
        while j<n2:
            mergeArr.append(arr2[j]);j+=1

        return mergeArr

    def mergeSort(self,nums,left,right):
        if left<right:
            mid=(left+right)//2
            
            arr1=self.mergeSort(nums,left,mid)
            arr2=self.mergeSort(nums,mid+1,right)
            
            return self.mergeLists(arr1,arr2)
        
        return nums[left:right+1]

s=Solution()
print(s.sortArray([1,2,4,2,1]))