<template>
    <div>
      <button @click="toggleActive">切换激活状态</button>
      <button @click="toggleError">切换错误状态</button>
      <div 
        :class="{active: isActive, 'text-danger': hasError}" 
        :style="{ fontSize: fontSize + 'px', color: textColor }"
        class="box"
      >
            示例文本
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  //设置默认值
  export default {
    setup() {
      const isActive = ref(true);
      const hasError = ref(false);
      const fontSize = ref(16);
      const textColor = ref('black');
  //设置绑定值的状态
      const toggleActive = () => {
        isActive.value =!isActive.value;
      };
  
      const toggleError = () => {
        hasError.value =!hasError.value;
      };
  
      return {
        isActive,
        hasError,
        fontSize,
        textColor,
        toggleActive,
        toggleError
      };
    }
  };
  </script>
  
  <style>
  .active {
    background-color: lightgray;
  }
  
  .text-danger {
    border: 1px solid red;
  }
  
  .box {
    padding: 10px;
    margin-top: 10px;
  }
  </style>