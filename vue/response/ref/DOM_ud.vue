<script setup>
import {nextTick} from 'vue'

const count = ref(0)

async function increment() {
    count.value++
    await nextTick()
    //现在更新了
    console.log('更新后的count在dom中已经显示');
    ;
    
}
</script>

<template>
    <div>
        <p>{{ count }}</p>
        <button @click="increment">点击增加count并在DOM更新后执行操作</button>
    </div>
</template>