/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor, oldColor = image[sr][sc]) {
  if (newColor === oldColor) return image;
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[0].length ||
    image[sr][sc] !== oldColor
  )
    return;

  image[sr][sc] = newColor;

  floodFill(image, sr - 1, sc, newColor, oldColor);
  floodFill(image, sr + 1, sc, newColor, oldColor);
  floodFill(image, sr, sc - 1, newColor, oldColor);
  floodFill(image, sr, sc + 1, newColor, oldColor);

  return image;
};

let image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  color = 2;

console.log(floodFill(image, sr, sc, color));
// Output: [
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1],
// ];

image = [
  [0, 0, 0],
  [0, 0, 0],
];
sr = 0;
sc = 0;
color = 0;
console.log(floodFill(image, sr, sc, color));

Output: [
  [0, 0, 0],
  [0, 0, 0],
];
