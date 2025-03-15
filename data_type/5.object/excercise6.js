const student = {
    name: 'Lucy',
    age: 18,
    grade: '高三',
    [Symbol('hobby')]: 'reading'
};

// 请使用合适的属性遍历方法，将student对象中除了Symbol类型的属性之外的所有属性名和属性值
for (let key in student) {
    if (typeof student[key]!== "symbol") {
        console.log(key + ": " + student[key]);
    }
}

// 以如下格式打印到控制台：属性名: 属性值
// 例如：name: Lucy