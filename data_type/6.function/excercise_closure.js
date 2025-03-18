/* 访问内部属性 */
function counter() {
    let count = 0;
    return{
        increment:function increment(){
            count++
            return count;},    
        
        decrement:function decrement(){
            count++
            return count;}
        }
    }
let addOne = counter()
console.log(addOne.increment());
console.log(addOne.decrement());
