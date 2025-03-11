var n=90;
var even = (n % 2 === 0) ? true : false;
console.log(even);
var myVar;
console.log(
  myVar ?//判断var是否有值
  'myVar has a value' :
  'myVar does not have a value'
)
// myVar does not have a value,输出由对条件判断和expression摆放决定
var msg = '数字' + n + '是' + (n % 2 === 0 ? '偶数' : '奇数');
console.log(msg);