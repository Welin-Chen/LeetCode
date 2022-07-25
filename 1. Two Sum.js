/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length-1;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if((nums[i]+nums[j])===target){
//                 return [i,j];
//             }
//         }
//     }
// };
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i];
    if (res in map) return [i, map[res]];
    map[nums[i]] = i;
  }
};

// let nums = [2, 7, 11, 15],
//   target = 9;

// let nums = [3, 2, 4],
//   target = 6;

let nums = [3, 3],
  target = 6;
console.log(twoSum(nums, target));
Output: [0, 1];
