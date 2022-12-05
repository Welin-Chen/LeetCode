let next =
    function(n) {
  let sum = 0;

  while (n != 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return sum;
}

var isHappy = function(n) {
  let slow = next(n);
  let fast = next(next(n));

  while (slow != fast) {
    slow = next(slow);
    fast = next(next(fast));
  }

  return fast == 1;
};

console.log(isHappy(19));
console.log(isHappy(2));