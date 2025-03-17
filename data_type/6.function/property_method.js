/* name property */
function f1() {}
f1.name; // "f1"

var f2 = function () {};
f2.name; // "f2"

var f3 = function myname() {};
f3.name; //'myName'

/* length property */
function f(a, b) {}
f.length; // 2

/* toString */
function f() {
  a();
  b();
  c();
}
f.toString(); //返回函数的源码
// function f() {
//  a();
//  b();
//  c();
// }
console.log(Math.sqrt.toString()); //返回原生代码

/* scope */
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() // 1