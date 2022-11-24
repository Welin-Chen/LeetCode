var myAtoi = function(s) {
  let i = 0;
  let sign = 1;
  let res = 0;
  let max = 2 ** 31 - 1;
  let min = -(2 ** 31);

  console.log(max, min);

  while (i < s.length && s[i] == ' ') i++;

  if (i == s.length) return 0;

  if (s[i] == '+' || s[i] == '-') {
    sign = s[i] == '-' ? -1 : 1;
    i++;
  };


  while (i < s.length) {
    let c = s[i];
    if (c < '0' || c > '9') return res;

    let digit = sign * (c - '0');

    if (res > max / 10 || (res == parseInt(max / 10) && digit > max % 10))
      return max;
    if (res < min / 10 || (res == parseInt(min / 10) && digit < min % 10))
      return min;


    res = res * 10 + digit;
    i++;
  }
  return res;
};

// console.log(myAtoi('  -42'));
console.log(myAtoi('2147483648'));