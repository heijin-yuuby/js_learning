var myObj = {
  name: "John",
  age: 30,
  city: "New York",
};
nameValue = myObj.name;
cityValue = myObj.city;

var key = "age";
var myObject = {
  name: "Alice",
  age: 25,
  job: "Engineer",
};

myObject.age;
myObject[key];

var specialObj = {
  1.5: "Some value",
  price: 99.99,
};
specialObj[1.5]; // "Some value"
specialObj["price"]; // 99.99，键名已经是字符串，所以可以不用加引号

//4.数字键名只能用方括号获取值，
