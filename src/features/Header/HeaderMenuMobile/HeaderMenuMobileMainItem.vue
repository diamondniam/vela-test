<script setup>
import { Arrow } from '@/components/Icons'

const props = defineProps({
  item: Object,
  iconsMap: Object,
})
</script>

<template>
  <button class="header-menu-mobile-main-item">
    <div class="header-menu-mobile-main-item__inner">
      <component :is="iconsMap[item.icon]" class="image"></component>

      {{ item.title }}

      <span class="header-menu-mobile-main-item__inner__quantity">{{ item.quantity }}</span>
    </div>

    <Arrow v-if="item.type === 'button'" class="header-menu-mobile-main-item__arrow" />
  </button>
</template>

<style lang="scss" scoped>
.header-menu-mobile-main-item {
  @include button--gray;
  justify-content: space-between;

  &__inner {
    display: flex;
    gap: $gap-xs;

    & .image {
      @include transition(color);
      color: $primary-lighter;
    }

    &:active {
      & .image {
        color: $primary;
      }
    }

    &__quantity {
      color: $foreground;
      opacity: 0.5;
    }
  }

  &__arrow {
    opacity: 0.5;
  }

  &:active {
    & .header-menu-mobile__main__button__arrow {
      opacity: 1;
    }
  }
}
</style>
