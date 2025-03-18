/* 父对象要读取子变量方法 */
function f1() {
    var n = 999;
    function f2() {
      console.log(n);
    }
    return f2;
  }
  
  var result = f1();
  result(); // 999
//闭包是将函数内部与外部连接起来的一座桥梁


