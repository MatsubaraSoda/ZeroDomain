<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Autoplay, Pagination];

const slides = [
  { src: '/assets/Z-MATRIX.jpeg', alt: 'Z-MATRIX' },
  { src: '/assets/Z-CORE.jpeg', alt: 'Z-CORE' },
];
</script>

<template>
  <!-- Hero 轮播：视口高度 98%（dvh 适配移动端地址栏）；固定顶栏叠在上方时不扣减高度 -->
  <div class="h-[98dvh] w-full">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      loop
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      class="hero-swiper h-full w-full"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="block h-full w-full object-cover"
          :loading="i === 0 ? 'eager' : 'lazy'"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
/* Swiper 内部 wrapper / slide 默认不设满高，需拉满链条图片才能 object-cover 铺满首屏 */
.hero-swiper :deep(.swiper-wrapper),
.hero-swiper :deep(.swiper-slide) {
  height: 100%;
}
</style>
