const merge =
    (left, right) => {
      let res = [], l = 0, r = 0, i = 0;

      while (l < left.length && r < right.length) {
        if (left[l] <= right[r])
          res[i++] = left[l++];
        else
          res[i++] = right[r++];
      }

      return res.concat(left.slice(l), right.slice(r));
    }

const mergeSort = (nums, l, r) => {
  if (l === r - 1) return [nums[l]];

  let mid = (l + r) / 2 | 0;

  let left = mergeSort(nums, l, mid);
  let right = mergeSort(nums, mid, r);

  return merge(left, right);
};

var sortArray = function(nums) {
  return mergeSort(nums, 0, nums.length);
};

let res = sortArray([1, 5, 3, 4, 2]);

console.log(res);