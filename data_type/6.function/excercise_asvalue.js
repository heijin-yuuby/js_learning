/* 本练习关于函数作为值被赋值或传入其他函数 */
/* 1 */
function subtract(x, y) {
  return x - y;
}
var subOp = subtract;
console.log(subOp(5, 3));

function multiply(x, y) {
  return x * y;
}
function executeFunction(func) {
  return func(4, 5);
}
var result = executeFunction(multiply);
/* 2 */
function square(x) {
  return x * x;
}
function applyOperation(func) {
  return function (arr) {
    var a = [];
    for (var i = 0; i < arr.length; i++) {
      a.push(func(arr[i]));
    }
    return a;
  };
}
var operation = applyOperation(square);
var a = operation([2, 3, 4]);
console.log(a);
/* 3 */
function double(x) {
  return x * 2;
}
function square(x) {
  return x * x;
}
function composeFunctions(func1, func2) {
  return function (x) {
    var a = func1(x);
    var b = func2(a);
    return b;
  };
}
var finalfunction = composeFunctions(double, square);
var a = finalfunction(2);
console.log(a);
