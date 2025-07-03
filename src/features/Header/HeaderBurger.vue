<script setup lang="ts">
import { Burger, Close } from '@/components/Icons'
import { useHeader } from './store'
import { lockScreen, unlockScreen, useResize } from '@/utils'
import { computed } from 'vue'

const headerStore = useHeader()

const { width, height } = useResize()

const isMobile = computed(() => width.value < 1200)

const handleBurgerClick = () => {
  if (headerStore.active) {
    unlockScreen()
  } else if (isMobile.value) {
    lockScreen()
  }

  headerStore.setActive(!headerStore.active)
}
</script>

<template>
  <button class="header-burger" @click="handleBurgerClick">
    <Transition name="fade" mode="out-in">
      <Burger v-if="!headerStore.active" />
      <Close v-else class="header-burger__close" />
    </Transition>
  </button>
</template>

<style lang="scss" scoped>
.header-burger {
  @include button--primary;
  width: 50px;

  &__close {
    color: $background;
  }
}
</style>
