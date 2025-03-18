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

  /* 5.arguments对象 */
  var f = function (one) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
  }
  
  f(1, 2, 3)
  // 1
  // 2
  // 3

  var f = function(a, b) {
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
  }
  
  f(1, 1) // 5,运行的时候修改参数，但是还是由函数内部对象定义决定结果

  var f = function(a, b) {
    'use strict'; // 开启严格模式
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
  }
  
  f(1, 1) // 2,arguments对象不会影响实际参数

  function f() {
    return arguments.length;//可以看实际调用时带几个参数
  }
  
  f(1, 2, 3) // 3
  f(1) // 1
  f() // 0

  /* 让arguments使用数组方法 */
  var args = Array.prototype.slice.call(arguments);

// 或者
var args = [];
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i]);
}
  
  