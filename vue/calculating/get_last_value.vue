<script setup>
import { ref,computed } from 'vue'

const count = ref(2)
const previousCount = ref(count.value);//用于记录上一次的 count

const alwaysSmall = computed(() => {
    if (count.value <= 3) {
        previousCount.value = count.value
        return count.value
    }

    return previousCount = () => {
        count.value++;
    }
})
const incrementCount = () => {
  count.value++;
};
</script>

<template>
<div>
    <p>count: {{ count }}</p>
    <p>alwaysSmall: {{ alwaysSmall }}</p>
    <button @click="incrementCount">click me</button>
</div>
</template>