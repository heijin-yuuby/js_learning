/* 用function命令声明函数 */
function print(s) {
  console.log(s);
}

/* 变量赋值 */
var print = function (s) {
  console.log(s);
};

/* 加上函数名声明函数，可以在函数体内部调用自身 */
var print = function x() {
  console.log(typeof x);
};

x;
// ReferenceError: x is not defined
//函数名只在函数体内部有效
print();
// function
/* 可以这样声明 */
var f = function f() {
  console.log(typeof f);
}; //方便查找和修改

/* 重复声明 */
function f() {
  console.log(1);
}
f();

function f() {
  console.log(2);
}
f();

/* return语句、递归 */
function add(x, y) {
  return x + y; //直接返回return后面的值然后结束执行
}

add(1, 1); // 2

/* 递归 */
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}

fib(6); // 8

/* 函数被看作一种值 */
function add(x, y) {
  return x + y;
}

// 将函数赋值给一个变量
var operator = add;

// 将函数作为参数和返回值
function a(op) {
  return op;
}
a(add)(1, 1); //将a作为参数传入a中，将1,1传入add中

/* 函数名的提升 */
f();
function f(){}//不报错

f();
var f =function(){};//var了这句，f被提升到了头部
//等同于
var f;
f();
f =function(){};//f还没被赋值