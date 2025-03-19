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
Number(obj)


if(typeof obj.valueOf()==='object'){
    Number(obj.toString());    
}else{
    Number(obj.valueOf())
}


