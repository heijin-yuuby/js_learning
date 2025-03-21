/*error构造函数 */
var err = new Error("出错了");
err.message; // "出错了"

/* 添加name和message,可了解详细信息 */
 if (error.name) {
  console.log(error.name + ":" + error.message);
}

/*查看错误发生时的堆栈 */
function throwit(){
    throw new Error('');   
}

function catchit(){
     try{
        throwit();
     }catch(e){
        console.log(e.stack);//遇到错误了之后把错误传递给catch块处理，而不是直接终止
     }
}

catchit()

/* SyntaxError */

//变量名错误： var 1a; //uncaught syntaxerror: invalid or unexpected token

//缺少括号： console.log 'hello'); //Unexpected string

/* ReferenceError */

//不存在变量：unknownvariable
//unknowvariable is not defined


// 将一个值分配给无法分配的对象 console.log()= 1, 左边不是变量

/* RangeError */
//对象值超出有效范围
// new Array(-1)
//invalid array length 

/* TypeError */
//不是预期类型
//new 123
/* var obj = {};
obj.unknownMethod() 这个值为undefined */

/*URIError*/
decodeURI('%2')
//URI malformed ，URI相关函数的参数不正确



