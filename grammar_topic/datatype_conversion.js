/* Number()将任意类型值转化成数值 */
Number('1969')//1969
Number('1969DDD')//NaN
Number('')//0
Number(true)//1
Number(false)//0
Number(undefined)//NaN
Number(null)//0
/* 相对松弛 */
parseInt('43 cats')//43

Number([5])//5,除了单个数值的数组其他都返回NaN

var obj = {}

/* Number（）原理 */
var obj = {x:1};
Number(obj)//NaN


if(typeof obj.valueOf()==='object'){
    console.log(Number(obj.toString()));    
}else{
   console.log( Number(obj.valueOf()))
}

/* 自动转换 */
123 + 'abc' // "123abc"

if ('abc') {
    console.log('hello')
  }  // "hello"

  + {foo: 'bar'} // NaN
  - [1, 2, 3] // NaN

  //建议预期什么类型的值，就调用该类型的转换函数
/* 自动转换为布尔值 */

  if ( !undefined
    && !null
    && !0
    && !NaN
    && !''
  ) {
    console.log('true');
  } // true

expression ? true : false
!! expression
