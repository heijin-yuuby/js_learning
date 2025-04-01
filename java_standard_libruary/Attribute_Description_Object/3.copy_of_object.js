/* 解决仅拷贝值的情况 */
var extend = function (to, from) {
    //to表示属性要被复制到的对象，from表示提供属性的对象
    for (var property in from) {
        //用这个方法检查遍历到的属性是否是源对象from自身的属性
      if (!from.hasOwnProperty(property)) continue;
      Object.defineProperty(
        to,
        property,
        //获取源对象from中属性property的属性描述对象，能完整复制属性
        Object.getOwnPropertyDescriptor(from, property)
      );
    }
  
    return to;//to此时已包含复制过来的所有自身属性
  }
  
  extend({}, { get a(){ return 1 } })//将一个包含存取器属性a的对象属性复制到空对象上
  // { get a(){ return 1 } })