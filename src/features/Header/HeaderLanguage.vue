<script setup>
import { World } from '@/components/Icons'
import { ref } from 'vue'

const userLocale = ref('ru')

const locales = ['ru', 'en']
</script>

<template>
  <div class="header-langauge">
    <World />

    <div class="header-langauge__items">
      <button
        v-for="(locale, index) in locales"
        :key="locale"
        :class="`header-langauge__items__item ${
          userLocale === locale ? 'header-langauge__items__item__active' : ''
        }`"
      >
        <div v-if="index !== 0" class="header-langauge__items__item__divider"></div>

        {{ locale.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-langauge {
  @include flex-center;
  padding: $gap-sm 0;
  gap: $gap-xs;
  width: 120px;

  @include max-w('custom', 1200px) {
    justify-content: start;
  }

  &__items {
    display: flex;
    gap: $gap-xs;

    &__item {
      @include flex-center;
      @include hover__to-color($color: $foreground, $last-color: $foreground-secondary);
      gap: $gap-xs;
      color: $foreground-secondary;

      &__divider {
        width: 1px;
        height: 12px;
        background: $border;
      }

      &__active {
        color: $foreground;
      }
    }
  }
}
</style>
