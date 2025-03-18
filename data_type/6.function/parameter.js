/* 1.x为参数 */
function square(x) {
    return x * x;
  }
  
  square(2) // 4
  square(3) // 9

  /* 2.参数不是必须的 */
  function f(a, b) {
    return a;
  }
  
  f(1, 2, 3) // 1
  f(1) // 1
  f() // undefined
  
  f.length // 2，为预期传入的参数个数

  function f(a, b) {
    return a;
  }
  
  /* 如果省略靠前的参数，要用undefined占位 */
 // f( , 1)  SyntaxError: Unexpected token ,(…)
  f(undefined, 1) // undefined

/* 3.传递方式 */
//传值传递，函数内部无法改变p的值（数值，字符串，布尔值）
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2

//传址传递（数组，对象，其他函数）
var obj = { p: 1 };

function f(o) {
  o.p = 2;
}
f(obj);

obj.p // 2
//替换参数不会影响
var obj = [1, 2, 3];

function f(o) {
  o = [2, 3, 4];
}
f(obj);

obj // [1, 2, 3]

/* 4.同名参数，取最后出现的值 */
function f(a, a) {
    console.log(a);
  }
  
  f(1, 2) // 2

function f(a, a) {
    console.log(a);
  }
  
  f(1) // undefined

  function f(a, a) {
    console.log(arguments[0]);
  }
  
  f(1) // 1
  