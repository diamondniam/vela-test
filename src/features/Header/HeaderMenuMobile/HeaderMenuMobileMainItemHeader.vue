<script setup>
import { Arrow } from '@/components/Icons'

const props = defineProps({
  active: Object,
  i: Number,
  currentStep: Number,
})
</script>

<template>
  <div class="header-menu-mobile-main-item-header">
    <button
      :tabindex="currentStep === i ? 0 : -1"
      class="header-menu-mobile-main-item-header__arrow"
    >
      <Arrow />
    </button>

    <h2 class="header-menu-mobile-main-item-header__title">
      {{ active?.title }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.header-menu-mobile-main-item-header {
  display: flex;
  align-items: center;
  gap: $gap-xs;
  cursor: pointer;

  &__arrow {
    transform: rotate(180deg);
    opacity: 0.5;
  }

  &__title {
    @include text($size: 'lg', $weight: 'medium');
  }

  &:active {
    opacity: 1;
  }
}
</style>
