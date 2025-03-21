function MyCustomError(message){
    this.message = message || '发生了自定义错误'
    this.name = 'MyCustomError';
}
MyCustomError.prototype =new Error()
MyCustomError.prototype.constructor = MyCustomError;

function main(){
    var num = -5;
    if(num<0){
        throw new MyCustomError('数字不能为负数')   
    }
}
try{
    main()
}catch(e){
    console.log(`错误名称：${e.name},错误信息：${e.message}`);
}