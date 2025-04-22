/* 异步请求管理 */
import { ref, watchEffect } from 'vue';

const searchQuery = ref(''); //创建响应式引用，可以在其他地方使用和修改
watchEffect(async (onCleanup) => {
    if (!searchQuery.value) return;
    const controller = new AbortController();
    const signal = controller.signal;
    const response = await fetch(`https://api.example.com/search?q=${searchQuery.value}`, { signal });
    // 处理响应数据
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // 更新组件状态显示搜索结果

    // 清理函数，在下次请求前取消未完成的请求
    onCleanup(() => {
        controller.abort();
    });
});