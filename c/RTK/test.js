function f(x) {
  x += 1;
}

function g(x) {
  x.value *= 5;
}

let a;
let b = 1;
let c = {value: 2};
let d = c;
f(a);
f(b);
f(d);

console.log(a, b, c.value, d.value);