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
/* 用concat合并数组 */
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));