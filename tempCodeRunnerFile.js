var longestValidParentheses = function (s) {
  let open = 0,
    close = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? open++ : close++;
    if (open === close) max = Math.max(max, close * 2);
    if (close > open) {
      open = 0;
      close = 0;
    }
  }
  open = 0;
  close = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] === ")" ? close++ : open++;
    if (open === close) max = Math.max(max, open * 2);
    if (open > close) {
      open = 0;
      close = 0;
    }
  }
  return max;
};