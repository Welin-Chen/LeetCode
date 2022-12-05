class MyQueue:
    def __init__(self):
        self.st1=[]
        self.st2=[]

    def push(self, x: int) -> None:
        self.st1.append(x)

    def pop(self) -> int:
        if len(self.st1)==0 and len(self.st2)==0:return -1
        
        if len(self.st2)==0:
            for _ in range(len(self.st1)):
                self.st2.append(self.st1.pop())
            
        return self.st2.pop()

    def peek(self) -> int:
        if len(self.st1)==0 and len(self.st2)==0:return -1

        if len(self.st2)==0:
            for _ in range(len(self.st1)):
                self.st2.append(self.st1.pop())
        
        return self.st2[-1]

    def empty(self) -> bool:
        return len(self.st1)==0 and len(self.st2)==0

q=MyQueue()
q.push(1)
q.push(3)
q.push(7)

print(q.peek())
print(q.empty())
print(q.pop())
print(q.peek())
print(q.pop())
print(q.peek())
print(q.pop())
print(q.peek())
print(q.empty())