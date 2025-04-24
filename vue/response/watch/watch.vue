<template>
  <div>
    <p>当前计数: {{ state.count }}</p>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';

// 创建一个响应式对象
const state = reactive({
  count: 0
});

// 侦听getter函数，即state.count
watch(
  () => state.count,
  (count, prevCount) => {
    // 在控制台打印计数变化的日志
    console.log(`计数从 ${prevCount} 变为了 ${count}`);
  }
);

// 模拟计数增加操作
setInterval(() => {
  state.count++;
}, 2000);
</script>

<style scoped>
/* 可根据需求添加样式 */
</style>