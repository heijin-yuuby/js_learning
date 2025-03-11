var m = 1;
var n = 2;

if (m !== 1)
if (n === 2) console.log('hello');
else console.log('world');//这段是跟着最近的 if 语句，但是最外层条件不符，根本不会执行内层的 if和 else
/* 无输出 */