class Solution:    
    def isHappy(self, n: int) -> bool:
        def next( n: int)-> int:
            sum=0

            while n!=0:
                sum+=(n%10)**2
                n=n//10
            return sum

        slow=next(n)
        fast=next(next(n))

        while slow!=fast:
            slow=next(slow)
            fast=next(next(fast))

        return fast==1
  
s=Solution
print(s.isHappy(s,19))
print(s.isHappy(s,2))
