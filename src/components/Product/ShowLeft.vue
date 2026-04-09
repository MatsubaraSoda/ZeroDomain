<script setup lang="ts">
import { ref } from 'vue';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/thumbs';

const modules = [Thumbs];
// 缩略图 Swiper 实例，作为主图 Swiper 的 thumbs 控制器
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const slides = [
  { id: 1, src: '/assets/Z-CORE.jpeg', alt: 'Z-CORE 主图' },
  { id: 2, src: '/assets/Z-CORE.jpeg', alt: 'Z-CORE 角度图' },
  { id: 3, src: '/assets/Z-CORE.jpeg', alt: 'Z-CORE 细节图' },
  { id: 4, src: '/assets/Z-CORE.jpeg', alt: 'Z-CORE 场景图' },
];
</script>

<template>
  <!-- 左侧媒体栏：在商品展示区滚动时保持粘性定位 -->
  <div class="w-auto min-w-100">
    <!-- 粘性容器：避开顶部导航（64px）后贴顶 -->
    <div class="sticky top-16 h-[calc(95dvh-64px)] px-4">
      <!-- 媒体展示区（主图 + 缩略图）仅占左栏可视高度的 80% -->
      <div class="h-4/5 space-y-4">
        <!-- 主图轮播：受下方缩略图控制 -->
        <Swiper
          :modules="modules"
          :thumbs="{ swiper: thumbsSwiper }"
          :slides-per-view="1"
          class="h-[calc(100%-5rem)] w-full"
        >
          <SwiperSlide v-for="slide in slides" :key="slide.id" class="h-full">
            <img
              :src="slide.src"
              :alt="slide.alt"
              class="h-full w-full object-cover object-center"
              loading="eager"
            />
          </SwiperSlide>
        </Swiper>

        <!-- 缩略图轮播：点击切换主图 -->
        <Swiper
          :modules="modules"
          :slides-per-view="4"
          :space-between="12"
          watch-slides-progress
          @swiper="setThumbsSwiper"
          class="h-32"
        >
          <SwiperSlide v-for="slide in slides" :key="`thumb-${slide.id}`" class="h-full">
            <img
              :src="slide.src"
              :alt="`${slide.alt} 缩略图`"
              class="h-full w-full rounded object-cover object-center"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
