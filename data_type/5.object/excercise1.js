var complexObj = {
  person: {
    name: 'Bob',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '12345'
    },
    hobbies: ['reading', 'hiking', 'painting']
  },
  company: {
    name: 'TechCo',
    employees: [
      { name: 'Eve', position: 'Developer' },
      { name: 'Charlie', position: 'Manager' }
    ]
  }
};
// 将 person 对象中的 name 键的值修改为 Robert
complexObj.person.name = 'Robert';

// 在 person 对象的 hobbies 数组中添加一个新的爱好 swimming
complexObj.person.hobbies.push('swimming');

// 在 company 对象的 employees 数组中，找到 position 为 Manager 的员工对象，将其 name 修改为 Charlotte
complexObj.company.employees[1].name = 'Charlotte';

// 在 person 对象中添加一个新的属性 contact，其值为一个新的对象，包含 email: 'bob@example.com' 和 phone: '123-456-7890'
complexObj.person.contact = {
  email: 'bob@example.com',
  phone: '123-456-7890'
};

// 删除 person 对象中 address 对象的 state 属性
delete complexObj.person.address.state;

// 最后，打印出修改后的 complexObj 对象
console.log(complexObj);