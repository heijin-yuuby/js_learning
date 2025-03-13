var obj = {
    p: 'Hello World'
  };
  
  obj.p // "Hello World"
  obj['p'] // "Hello World"

  var foo = 'bar';

  var obj = {
    foo: 1,
    bar: 2
  };
  /*方括号内需要加引号*/
  obj.foo  // 1,此时foo是字符串
  console.log(obj[foo])  // 2,不加''此时foo是变量

  var obj = {
    0.7: 'Hello World'
  };
  
  obj['0.7'] // "Hello World"
  obj[0.7] // "Hello World"
  //obj.0.7 会报错,数值键名不能用点