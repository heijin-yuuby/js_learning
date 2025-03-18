//1
function updateObject(obj){
    obj.newProp = Date();
    return obj;

}
var myObj={name:"John"}
updateObject(myObj)
console.log(myObj);

//2
function multiplyAndSum(nums,factor){
let sum = 0;
for(let num of nums){
    sum += num * factor;
}
return sum;
}