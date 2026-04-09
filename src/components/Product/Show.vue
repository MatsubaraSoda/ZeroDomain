<script setup lang="ts">
import ShowLeft from './ShowLeft.vue';
import ShowRight from './ShowRight.vue';
</script>

<template>
  <div :class="['flex h-auto w-full bg-gray-100 px-16']">
    <ShowLeft />
    <ShowRight />
  </div>
</template>

<style scoped>
</style>
