class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix or not matrix[0]:
            return []
        
        res=[]
        y0=0
        y1=len(matrix)
        x0=0
        x1=len(matrix[0])

        while (y1-1)>=y0 and (x1-1)>=x0:
            for i in range(x0,x1):
                res.append(matrix[y0][i])
            y0+=1

            for j in range(y0,y1):
                res.append(matrix[j][x1-1])
            x1-=1
            
            if x0>(x1-1) or y0>(y1-1):
                break
            
            for i in range(x1-1,x0-1,-1):
                res.append(matrix[y1-1][i])
            y1-=1

            for j in range(y1-1,y0-1,-1):
                res.append(matrix[j][x0])
            x0+=1

        return res