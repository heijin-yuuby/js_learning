<script>
const isActive = ref(true)
const hasError = ref(false)//这个值为true时，text-danger 会被移除   
</script>
<template>
    <div 
    
    class="static"
    :class="{active: isActive, 'text-danger': hasError}" ></div>
</template>