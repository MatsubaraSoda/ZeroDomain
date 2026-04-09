<script setup lang="ts">
import { useAsyncState } from '@vueuse/core';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { fetchHeroes, normalizeHeroMediaUrl } from '@/api/heroes';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Autoplay, Pagination];

type HeroItems = { id: number; title: string; src: string };

const { state, isLoading, error } = useAsyncState(
  async () => {
    const res = await fetchHeroes();
    if (res.code !== 0) {
      throw new Error(res.message || '请求失败');
    }
    return res.data.map((item) => ({
      id: item.id,
      title: item.title,
      src: normalizeHeroMediaUrl(item.mediaUrl),
    }));
  },
  [] as HeroItems[],
  { immediate: true },
);
</script>

<template>
  <!-- Hero 轮播：数据来自 /api/heroes；h + min-h + shrink-0 保证无论是否有 state 都占满首屏区域 -->
  <div class="h-[98dvh] min-h-[98dvh] w-full shrink-0">
    <p
      v-if="error"
      class="flex h-full min-h-[98dvh] items-center justify-center bg-neutral-100 px-4 text-center text-sm text-neutral-600"
      role="alert"
    >
      {{ error instanceof Error ? error.message : '轮播内容加载失败' }}
    </p>
    <p
      v-else-if="isLoading"
      class="flex h-full min-h-[98dvh] items-center justify-center bg-neutral-100 text-sm text-neutral-500"
    >
      加载中…
    </p>
    <Swiper
      v-else-if="state.length > 0"
      :modules="modules"
      :slides-per-view="1"
      loop
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      class="hero-swiper h-full min-h-[98dvh] w-full"
    >
      <SwiperSlide v-for="(slide, i) in state" :key="slide.id">
        <img
          :src="slide.src"
          :alt="slide.title"
          class="block h-full w-full object-cover"
          :loading="i === 0 ? 'eager' : 'lazy'"
        />
      </SwiperSlide>
    </Swiper>
    <div
      v-else
      class="flex h-full min-h-[98dvh] w-full items-center justify-center bg-neutral-100 text-sm text-neutral-400"
      role="status"
    >
      暂无轮播内容
    </div>
  </div>
</template>

<style scoped>
.hero-swiper :deep(.swiper-wrapper),
.hero-swiper :deep(.swiper-slide) {
  height: 100%;
}
</style>
