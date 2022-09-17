/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    let r = stones.pop() - stones.pop();
    if (r) stones.push(r);
    stones.sort((a, b) => a - b);
  }
  return stones.length === 0 ? 0 : stones[0];
};

let stones = [2, 7, 4, 1, 8, 1];

// stones = [1];
// stones = [2, 2];
console.log(lastStoneWeight(stones));
Output: 1;
