/*遍历属性*/
var obj = { a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log("键名：", i);
  console.log("键值：", obj[i]); //[]会将变量作为属性名访问
}
/*只遍历对象可遍历的属性*/
var obj = {};

// toString 属性是存在的
obj.toString; // toString() { [native code] }

for (var p in obj) {
  console.log(p);
} // 没有任何输出
