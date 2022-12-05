var spiralOrder = function(matrix) {
  if (matrix.length == 0) return [];

  let res = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (left <= right && top <= bottom) {
    for (let j = left; j <= right; j++) {
      res.push(matrix[top][j]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    if (left > right || top > bottom) break;

    for (let j = right; j >= left; j--) {
      res.push(matrix[bottom][j]);
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};
