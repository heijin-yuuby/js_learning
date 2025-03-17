var obj = {
  foo: "Hello",
  bar: "World",
};
/*等同于*/
var obj = {
  foo: "Hello",
  bar: "World",
};

var obj = {
  1: "a",
  3.2: "b",
  1e2: true,
  1e-2: true,
  0.234: true,
  0xff: true,
};

obj;
// Object {
//   1: "a",
//   3.2: "b",
//   100: true,
//   0.01: true,
//   0.234: true,
//   255: true
// }

console.log(obj["100"]); // true

// 报错
var obj = {
  //1p: 'Hello World'
};

// 不报错
var obj = {
  "1p": "Hello World",
  "h w": "Hello World",
  "p+q": "Hello World",
};
