var arr = [10, 20, 30];
console.log(arr.valueOf());
console.log(arr.toString());

var nestedArr = [10, 20, [30, 40]];
console.log(nestedArr.toString());

arr.push(40, 50);
console.log(arr.length, arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(5, 8);
console.log(arr);
let joinedStr = arr.join(" - ");
console.log(joinedStr);

let arr2 = [60, 70];
let newArray = arr.concat(arr, arr2);
console.log(newArray);
