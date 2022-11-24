class Solution:
    def myAtoi(self, s: str) -> int:
        if not s:
            return 0

        i = 0
        sign = 1
        res = 0

        while i < len(s) and s[i] == ' ':
            i += 1

        if(i == len(s)):
            return 0

        if(s[i] == '+' or s[i] == '-'):
            sign = -1 if s[i] == '-' else 1
            i += 1

        max = 2 ** 31-1
        min = -2 ** 31

        while(i < len(s)):
            c = s[i]
            if(not c.isdigit()):
                return res

            digit = sign*(int(c))
            # print(res == int(min/10) and digit < min % 10, digit, min % 10)
            if(res > max/10 or (res == int(max/10) and digit > max % 10)):
                return max

            if(res < min/10 or (res == int(min/10) and digit < min % -10)):
                return min

            res = res*10+digit
            i += 1
        return res


s = Solution()
print(s.myAtoi("  -42"))
print(s.myAtoi("-2147483647"))
