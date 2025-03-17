let person = { name: 'Tom', age: 20, city: 'New York' };
console.log('occupation' in person)// 请在此处填写代码，使用in运算符来判断person对象是否存在名为'occupation'的属性
if('occupation' in person){console.log('object has occupation property')}else{console.log('it hasn\'t')}// 如果存在，打印出"该对象有'occupation'属性"，否则打印出"该对象没有'occupation'属性"