/* 异步请求管理,防止无效的请求占用资源 */
import { ref, watchEffect } from 'vue';

const searchQuery = ref(''); //创建响应式引用，可以在其他地方使用和修改
watchEffect(async (onCleanup) => {
    if (!searchQuery.value) return; // !searchQuery.value = true(值为空),则return
    const controller = new AbortController(); //创建实例，可以用于取消一个正在进行的请求
    const signal = controller.signal; //获取signal对象，可以传递给fetch请求
    const response = await fetch(`https://api.example.com/search?q=${searchQuery.value}`, { signal });
    // 处理响应数据
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json(); //相应数据解析为json格式，await等待解析完成，得到的数据储存在data中
    // 更新组件状态显示搜索结果

    // 清理函数，在下次请求前取消未完成的请求
    onCleanup(() => {
        controller.abort();
    });
});