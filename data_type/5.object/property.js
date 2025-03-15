var obj = {
    p: function (x) {
      return 2 * x;
    }
  };
  
  obj.p(1) // 2
/*可以动态创建属性，赋值即创建*/
  var obj = {};
obj.foo = 123;
obj.foo // 123
/*对象的属性可以共享*/
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a // 1

o2.b = 2;
o1.b // 2
/*中途更改o1对于原对象的引用，o2不会受到影响*/
var o1 = {};
var o2 = o1;
/*原始类型赋值，是值的拷贝，原始类型是值类型，赋值时，会创建一个新值，并将其赋值给新变量*/
o1.a = 1;
o2.a //  {}

var x = 1;
var y = x;

x = 2;
y // 1

//viewing of attribute
var obj = {
  key1: 1,
  key2: 2
};
/*查看对象属性名*/
console.log(Object.keys(obj));
// ['key1', 'key2']
/*查看对象属性及值*/
console.log(obj)
//{ key1: 1, key2: 2 }

var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []

/*遍历属性*/
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj.i);
}
/*只遍历对象可遍历的属性*/
var obj = {};

// toString 属性是存在的
obj.toString // toString() { [native code] }

for (var p in obj) {
  console.log(p);
} // 没有任何输出