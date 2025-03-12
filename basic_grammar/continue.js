var i = 0;

while (i < 100){
  i++;
  if (i % 2 === 0) continue;//跳过了所有偶数，直接回到最外层循环开始执行
  console.log('i 当前为：' + i);
}