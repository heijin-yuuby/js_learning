/* valueOf()，返回数组本身 */
var arr = [1, 2, 3];
arr.valueOf(); //[1,2,3]

/* toString(),返回数组的字符串形式 */
var arr = [1, 2, 3];
arr.toString(); // "1,2,3"

/* push(),pop() */
var arr = [];

arr.push(1); //1
arr.push("a"); //'a'

arr.pop(); //用于删除最后一个元素
arr; // [1]

var a = ["a", "b", "c"];
a.shift(); //用于删除数组第一个元素

var list = [1, 2, 3, 4];
var item; //用于存储从数组中取出的元素

while ((item = list.shift())) {
  console.log(item); //打印每次取出的元素
}

list; // [],但是这样的方法表明一旦item=0，就会停止遍历

var a = ["a", "b", "c"];

a.unshift("x");

var arr = ["c", "d"];
arr.unshift("a", "b"); //在数组的第一个位置添加元素
arr; //['a','b','c','d']

/* join(),以指定参数作为分隔符，将所有数组成员链接为一个字符串返回 */
var a = [1, 2, 3, 4];

a.join(""); // '1 2 3 4'
a.join(" | "); //"1 | 2 | 3 | 4"
a.join() //"1,2,3,4"

  [
    /* 数组成员是undefined或null或空，会被转为空字符串 */
    (undefined, null)
  ].join("#")
  [
    // "#"

    ("a", "b")
  ].join("-");
//'a-b'

Array.prototype.join.call("hello", "-");
// "h-e-l-l-o"

var obj = { 0: "a", 1: "b", length: 2 };
Array.prototype.join
  .call(obj, "-")

  [
    /* concat()用于多个数组的合并 */
    (1, 2, 3)
  ].concat(4, 5, 6);
// [1,2,3,4,5,6]

/* splice()用于删除原数组的一部分成员 */
arr.splice(StaticRange, CountQueuingStrategy, addElement1, addElement2);

var a = ['a','b','c','d','e','f'];
a.splice(4,2)//4为从第四位元素开始删除，2为删除两个元素
 
/* sort()对数组成员进行排序 */
['d','c','b','a'].sort()

[11,101].sort() //[101,11],先转换为字符串，再按照字典顺序进行比较

[10111,1101,111].sort(function (a,b){
  return a - b;//把结果return给sort，大于零就将前面的排在第二个后边
})//函数接收两个参数，表示比较的两个数组成员

