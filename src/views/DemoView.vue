<script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    name: String,
    age: Number,
    adress: {
      type: String,
      default: 'sda'
    }
  })
  console.log(props)
</script>

<template>
  <div>prop中的值：{{name}}</div>
</template>

<style scoped></style>
