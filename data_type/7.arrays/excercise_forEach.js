/* 用forEach添加索引 */
var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.forEach(function (fruit, index) {
  console.log(fruit + "在索引[" + index + "]处");
});

/* 用map生成新数组 */
var newFruits = fruits.map(function (fruit) {
  return fruit.charAt(0).toUpperCase() + fruit.slice(1);
});
console.log(newFruits);

/* 用filter筛选特定元素 */
var longfruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});
console.log(longfruits);

/* 用indexOf查找特定元素的索引 */
var cherryIndex = fruits.indexOf("cherry");
if (cherryIndex != -1) {
  var position = cherryIndex + 1;
  console.log("cherry位置在数组的第：" + position + " 个");
} else {
  console.log("不在该数组中");
}

/* 用pop删除最后一个元素 */
fruits.push("watermelon");
fruits.pop();
console.log(fruits);
