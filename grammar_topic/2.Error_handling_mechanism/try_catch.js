try {
    throw new Error('出错了!');
  } catch (e) {
    console.log(e.name + ": " + e.message);
    console.log(e.stack);
  }
  // Error  :出错了！


try{
    f();
}catch(e){
    //处理错误
}

try{
    throw "出错了"
}catch(e){
    console.log(111);
}
console.log(222);
//111
//222

/* 嵌套 */
var n = 100;

try {
  throw n;
} catch (e) {
  if (e <= 50) {
    // ...
  } else {
    throw e;
  }
}
// Uncaught 100