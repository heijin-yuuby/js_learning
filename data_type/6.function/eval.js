/* 接受一个字符串作为参数，将其当做语句执行 */
eval('var a = 1;');
a // 1

/* 作用域污染 */
var a = 1;
eval('a = 2');

console.log(a) // 2