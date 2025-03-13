// 定义一个对象obj1，包含一个数字属性num、一个数组属性arr和一个嵌套对象属性subObj
var obj1 = {
  num: 10,
  arr: [1, 2, 3],
  subObj: {
    str: 'original'
  }
};

// obj2指向obj1所引用的对象，此时obj1和obj2引用同一个对象，对其中一个对象的属性修改会影响另一个
var obj2 = obj1; 

// num1是从obj1.num获取的一个值，因为num是原始类型（数字），这里是值的拷贝，num1和obj1.num后续相互独立
var num1 = obj1.num; 

// arr1指向obj1.arr所引用的数组，arr1和obj1.arr引用同一个数组，对数组的操作会相互影响
var arr1 = obj1.arr; 

// subObj1指向obj1.subObj所引用的对象，subObj1和obj1.subObj引用同一个对象，对该对象的属性修改会相互影响
var subObj1 = obj1.subObj; 

// 通过obj2修改obj1中的num值为20，由于obj1和obj2引用同一个对象，所以会影响到obj1的num属性
obj2.num = 20; 

// 通过arr1向obj1中的arr数组添加一个元素4，因为arr1和obj1.arr引用同一个数组，所以会在原数组上添加元素
arr1[3] = 4; 

// 通过subObj1修改obj1中的subObj的str属性值为modified，由于subObj1和obj1.subObj引用同一个对象，会影响到该对象的属性
subObj1.str ='modified'; 

// 将obj1重新赋值为一个新的对象，此时obj1指向了新的对象，而obj2仍然指向原来的对象，二者不再关联
obj1 = { newProp: 'new value' }; 

// 打印obj1，此时obj1是新赋值的对象
console.log(obj1); 
// 打印obj2，obj2仍然指向原来的对象，其属性已被之前的操作修改
console.log(obj2); 
// 打印num1，num1是之前拷贝的原始值，不受obj1后续修改的影响
console.log(num1); 
// 打印arr1，arr1引用的数组已被修改，所以会输出修改后的数组
console.log(arr1); 
//打印subObj1，subObj1引用的对象已被修改，所以会输出修改后的对象
console.log(subObj1); 