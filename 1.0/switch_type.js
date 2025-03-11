var x=1;
switch (x) {
    case 1:
      console.log('x 等于1');
      break;//如果不 break，会穿透到下一个 case 语句执行（即便下一个不匹配）
    case 2:
      console.log('x 等于2');
      break;
    default:
      console.log('x 等于其他值');
  }
var x = 1;

switch (x) {
  case true://ture为布尔值，与1进行===比较时不相等
    console.log('x 发生类型转换');
    break;
  default:
    console.log('x 没有发生类型转换');
}

var x=1;
switch (x) {
    case 1:
      console.log('x 等于1');
    case 2:
      console.log('x 等于2');
      break;
    default:
      console.log('x 等于其他值');
  }