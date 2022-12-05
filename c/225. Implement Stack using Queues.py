from collections import deque

class MyStack:
    def __init__(self):
        self.q1=deque()
        self.q2=deque()
        self._top=None

    def push(self, x: int) -> None:
        self.q1.append(x)
        self._top=x

    def pop(self) -> int:
        while len(self.q1)>1:
            self._top=self.q1.popleft()
            self.q2.append(self._top)
        
        res=self.q1.popleft()
        self.q1, self.q2 = self.q2, self.q1
        return res

    def top(self) -> int:
        return self._top     

    def empty(self) -> bool:
        return len(self.q1)==0


# // ["MyStack", "push", "push", "top", "pop", "empty"]
# // [[], [1], [2], [], [], []]
# // Output
# // [null, null, null, 2, 2, false]


st=MyStack()
st.push(1)
st.push(2)

print(st.top())
print(st.pop())
print(st.empty())