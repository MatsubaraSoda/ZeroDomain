<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/TheNavbar.vue';
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
