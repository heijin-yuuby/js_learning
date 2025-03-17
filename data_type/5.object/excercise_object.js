// 定义一个对象obj1，包含一个数字属性num、一个数组属性arr和一个嵌套对象属性subObj
var obj1 = {
  num: 10,
  arr: [1, 2, 3],
  subObj: {
    str: "original",
  },
};

var obj2 = obj1;

var num1 = obj1.num;

var arr1 = obj1.arr;

var subObj1 = obj1.subObj;

obj2.num = 20;

arr1[3] = 4;
// 通过arr1向obj1中的arr数组添加一个元素4，因为arr1和obj1.arr引用同一个数组，所以会在原数组上添加元素

// 通过subObj1修改obj1中的subObj的str属性值为modified，由于subObj1和obj1.subObj引用同一个对象，会影响到该对象的属性
subObj1.str = "modified";

// 将obj1重新赋值为一个新的对象，此时obj1指向了新的对象，而obj2仍然指向原来的对象，二者不再关联
obj1 = { newProp: "new value" };

// 打印obj1，此时obj1是新赋值的对象
console.log(obj1);
console.log(obj2);
console.log(num1);
console.log(arr1);
console.log(subObj1);
