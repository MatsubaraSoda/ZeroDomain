<script setup lang="ts">
import ShowLeft from './ShowLeft.vue';
import ShowRight from './ShowRight.vue';
</script>

<template>
  <div :class="['flex h-dvh min-h-dvh w-full overflow-y-auto bg-gray-100 px-16', '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none']">
    <ShowLeft />
    <ShowRight />
  </div>
</template>

<style scoped>
</style>
