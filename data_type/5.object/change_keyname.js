/* 删除旧添加新键 */
let obj2={oldKey:'a'}
let b=obj2.oldKey;
delete obj2.oldKey;
obj2.newKey = b;
console.log(obj2);

/* ES6的解构赋值和对象扩展运算符 */
let obj = { oldKey: 'value' };
let { oldKey, ...rest } = obj;//从obj对象中解构并用rest获取剩余属性
let newObj = { newKey: oldKey, ...rest };
console.log(newObj); 


let h ={yuuby:214,
    xhixyan:214
};
let {yuuby, ...wajilao} = h;
let newh ={newyuuby:yuuby,...wajilao};
console.log(newh);