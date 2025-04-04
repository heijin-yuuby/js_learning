/* Array是js原生对象，也是构造函数 */
var arr = new Array(2);//表示生成两个成员的数组,每个位置都是空值
arr.length // 2
arr // [ empty x 2 ]

var arr = Array(2);
//等同于
var arr = new Array(2)


/* 不同的参数个数会导致不一致的行为 */

// 无参数时，返回一个空数组
new Array() // []

// 单个正整数参数，表示返回的新数组的长度
new Array(1) // [ empty ]
new Array(2) // [ empty x 2 ]

// 非正整数的数值作为参数，会报错
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// 单个非数值（比如字符串、布尔值、对象等）作为参数，
// 则该参数是返回的新数组的成员
new Array('abc') // ['abc']
new Array([1]) // [Array[1]]

// 多参数时，所有参数都是返回的新数组的成员
new Array(1, 2) // [1, 2]
new Array('a', 'b', 'c') // ['a', 'b', 'c']


/* 建议的做法是直接使用数组字面量 */
var arr = [1,2];

