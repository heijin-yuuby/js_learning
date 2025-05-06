<template>
    <input v-model="firstName" />
    <input v-model="lastName" />
    <p>Full Name: <input v-model="fullName" /></p>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const firstName = ref('John');
  const lastName = ref('Doe');
  
  const fullName = computed({
    get() {
      return `${firstName.value} ${lastName.value}`;
    },
    //用于反向输入全名分割名与姓
    set(newValue) {
      const parts = newValue.split(' ');
      firstName.value = parts[0] || '';
      lastName.value = parts[1] || '';
    }
  });
  </script>