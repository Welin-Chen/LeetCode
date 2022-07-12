var isPalindrome = function (x) {
  const arr = String(x);
  let first = 0;
  let last = 0;
  for (let i = 0; i < arr.length; i++) {
    first = arr[i];
    last = arr[arr.length - 1 - i];
    if (first !== last) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(123));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
