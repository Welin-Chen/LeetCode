class Solution:
    def decodeString(self, s: str) -> str:
        stack=[]
        cur_level=[]
        num=0

        for char in s:
            if char.isdigit():
                num = num*10+int(char)
            elif char.isalpha():
                cur_level.append(char)
            elif char == '[':
                stack.append((num,[*cur_level]))
                cur_level=[]
                num=0
            elif char == ']':
                prev_level_num, prev_level = stack.pop()
                cur_level_string="".join(cur_level)
                cur_level=[*prev_level, prev_level_num*cur_level_string]

        return "".join(cur_level)

s = Solution()
s=Solution()
print(s.decodeString("3[a]2[bc]"))
print(s.decodeString("3[a2[c]]"))
print(s.decodeString("2[abc]3[cd]ef"))


# Input: s = "3[a]2[bc]"
# Output: "aaabcbc"
# Example 2:

# Input: s = "3[a2[c]]"
# Output: "accaccacc"
# Example 3:

# Input: s = "2[abc]3[cd]ef"
# Output: "abcabccdcdcdef"