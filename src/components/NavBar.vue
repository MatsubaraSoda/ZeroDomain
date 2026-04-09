<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useWindowScroll } from '@vueuse/core';
import { ShoppingCartIcon, UserIcon } from '@heroicons/vue/24/outline';

// 1. 获取路由状态
const route = useRoute();
const isHomePage = computed(() => route.path === '/');

// 2. 获取滚动状态 (使用 VueUse 神器)
const { y } = useWindowScroll();
// 假设向下滚动超过 50px 触发变化，你后期可以根据实际 Hero 图片高度微调
const isScrolled = computed(() => y.value > 50);
const duration = 500;

// 3. 核心逻辑：只有在首页且未滚动时，才显示融入 Hero 的透明暗色（全白字）样式
const isHeroTransparent = computed(() => isHomePage.value && !isScrolled.value);
</script>

<template>
  <header :class="['fixed top-0 left-0 z-50 w-full overflow-hidden']">
    <div
      :class="[
        'pointer-events-none absolute inset-0 bg-white shadow-sm transition-opacity dark:bg-neutral-900',
        isHeroTransparent ? 'opacity-0' : 'opacity-100'
      ]"
      :style="{ transitionDuration: `${duration}ms` }"
    />
    <div
      :class="[
        'pointer-events-none absolute inset-0 bg-linear-to-b from-black/50 to-transparent transition-opacity',
        isHeroTransparent ? 'opacity-100' : 'opacity-0'
      ]"
      :style="{ transitionDuration: `${duration}ms` }"
    />
    <nav :class="['relative z-10 mx-auto flex h-16 items-center justify-between px-32']">
      <div :class="['flex items-center gap-10']">
        <a 
          href="#" 
          :class="[
            'font-semibold text-2xl tracking-tight transition-colors',
            isHeroTransparent ? 'text-white' : 'text-black dark:text-white'
          ]"
          :style="{ transitionDuration: `${duration}ms` }"
        >
          零域 ZeroDomain
        </a>
        <a 
          href="#" 
          :class="[
            'transition-colors',
            isHeroTransparent ? 'text-white' : 'text-black dark:text-white'
          ]"
          :style="{ transitionDuration: `${duration}ms` }"
        >
          产品
        </a>
        <a 
          href="#" 
          :class="[
            'transition-colors',
            isHeroTransparent ? 'text-white' : 'text-black dark:text-white'
          ]"
          :style="{ transitionDuration: `${duration}ms` }"
        >
          关于我们
        </a>
      </div>

      <div :class="['flex items-center gap-4']">
        <button
          type="button"
          aria-label="购物车"
          :class="['rounded p-1 transition-colors']"
          :style="{ transitionDuration: `${duration}ms` }"
        >
          <ShoppingCartIcon 
            :class="[
              'h-6 w-6 transition-colors',
              isHeroTransparent ? 'text-white' : 'text-black dark:text-white'
            ]" 
            :style="{ transitionDuration: `${duration}ms` }"
          />
        </button>
        <button
          type="button"
          aria-label="用户"
          :class="['rounded p-1 transition-colors']"
          :style="{ transitionDuration: `${duration}ms` }"
        >
          <UserIcon 
            :class="[
              'h-6 w-6 transition-colors',
              isHeroTransparent ? 'text-white' : 'text-black dark:text-white'
            ]" 
            :style="{ transitionDuration: `${duration}ms` }"
          />
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>