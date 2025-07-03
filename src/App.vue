<script setup>
import { Header, HeaderMobile } from '@/features/Header'
import { HomeBanner } from './features/HomeBanner'
import { useResize } from './utils'
import { computed } from 'vue'
import HeaderMenuMobile from './features/Header/HeaderMenuMobile/HeaderMenuMobile.vue'

const { width } = useResize()
const isMobile = computed(() => width.value < 1200)
</script>

<template>
  <div class="#app">
    <header class="__header">
      <Header v-if="!isMobile" />
      <HeaderMobile v-else />
    </header>

    <!-- <HeaderMenuMobile /> -->

    <main>
      <HomeBanner />
    </main>
  </div>
</template>

<style scoped lang="scss">
.__header {
  position: sticky;
  top: 0;
  z-index: 5;
  background: $background;
  padding-bottom: $gap-sm;
}
</style>
