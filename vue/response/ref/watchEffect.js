import { watchEffect } from 'vue';
const count = ref(0);
const stop = watchEffect(() => {
  console.log(count.value);
});
// 停止侦听器
stop(); //用于停止副作用