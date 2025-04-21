<template>
    <div>
      <!-- 使用ref定义的count，在模板中直接使用count，无需.value -->
      <p>当前计数：{{ count }}</p>
      <button @click="incrementCount">增加计数</button>
  
      <!-- 使用reactive定义的person，在模板中直接使用person的属性 -->
      <p>姓名：{{ person.name }}</p>
      <p>年龄：{{ person.age }}</p>
      <button @click="updatePerson">更新人物信息</button>
    </div>
  </template>
  
  <script>
  import { ref, reactive } from 'vue';
  
  export default {
    setup() {
      // 使用ref定义一个基本数据类型的响应式数据count
      const count = ref(0);
  
      // 使用reactive定义一个对象类型的响应式数据person
      const person = reactive({
        name: '张三',
        age: 20
      });
  
      // 定义增加计数的方法，即ref
      const incrementCount = () => {
        count.value++;
      };
  
      // 定义更新人物信息的方法，即reactive
      const updatePerson = () => {
        person.name = '李四';
        person.age = 25;
      };
  
      return {
        count,
        person,
        incrementCount,
        updatePerson
      };
    }
  };
  </script>