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