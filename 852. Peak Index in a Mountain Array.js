var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let n = arr[mid];
    if (n < arr[mid - 1]) r = mid - 1;
    else if (n < arr[mid + 1]) l = mid + 1;
    else return mid;
  }
};

// var peakIndexInMountainArray = function (arr) {
//   return arr.indexOf(Math.max(...arr));
// };

let arr = [0, 1, 0];
Output: 1;
console.log(peakIndexInMountainArray(arr));

arr = [0, 2, 1, 0];
Output: 1;
console.log(peakIndexInMountainArray(arr));

arr = [0, 10, 5, 2];
Output: 1;

console.log(peakIndexInMountainArray(arr));
