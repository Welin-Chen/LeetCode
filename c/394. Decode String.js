var decode = function(s) {
  let res = '';
  let stack = [];
  let n = 0;

  for (let c of s) {
    if (c === '[') {
      stack.push(n);
      stack.push(res);
      n = 0;
      res = '';
    } else if (c === ']') {
      let res0 = stack.pop();
      let n0 = stack.pop();
      res = res0 + res.repeat(n0);
    } else if (Number.isInteger(Number(c))) {
      n = 10 * n + Number(c);
    } else {
      res += c;
    }
  }
  return res;
};

console.log(decode('3[a]2[bc]'))
console.log(decode('3[2[c]]'))