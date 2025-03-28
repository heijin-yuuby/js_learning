// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]) {
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
/*只能对存在的属性赋值*/
var obj = {};
with (obj) {
  p1 = 4;
  p2 = 5;
}

obj.p1; // undefined
p1; // 4，这个p1被创造
/* 无法判断全局变量还是属性 */
with (obj1.obj2.obj3) {
  //with（作用范围）
  console.log(p1 + p2);
}

// 可以写成
var temp = obj1.obj2.obj3;
console.log(temp.p1 + temp.p2);
