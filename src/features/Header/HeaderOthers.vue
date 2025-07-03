<script setup>
import { Lightning, Flame, ChestBlue, Quest, Monster } from '@/components/Icons'
import { ref } from 'vue'
import headerOther from '@public/data/header-others.json'
import { useClickOutside } from '@/utils'

const headerOthersRef = ref(null)
const iconMap = { Flame, Lightning, ChestBlue, Quest, Monster }

const active = ref(null)

useClickOutside(headerOthersRef, (e) => {
  active.value = null
})
</script>

<template>
  <div ref="headerOthersRef" class="header-others">
    <div
      v-for="button in headerOther"
      @click="active = button.id"
      :key="button.id"
      class="header-others__button__container"
    >
      <button class="header-others__button__container__button">
        <div class="image">
          <component :is="iconMap[button.icon]" />
        </div>

        {{ button.title }}
      </button>

      <Transition name="fade__slide-up">
        <div v-if="button.id === active" class="header-others__button__container__dropdown">
          <a
            v-for="item in button.subMenu"
            class="header-others__button__container__dropdown__item"
            >{{ item.title }}</a
          >
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-others {
  display: flex;
  gap: $gap-sm;
  width: 100%;

  &__button__container {
    position: relative;

    &__button {
      @include button--gray;
      flex: 1;
      gap: $gap-xs;
      padding: 0 10px;
      height: 45px;

      & .image {
        color: $primary-lighter;
      }

      &:hover {
        & .image {
          color: $primary;
        }
      }
    }

    &__dropdown {
      @include shadow(2);
      @include small-scrollbar;
      overflow: auto;
      display: flex;
      align-items: start;
      flex-direction: column;
      position: absolute;
      z-index: 1;
      max-height: 300px;
      top: 100%;
      left: 0;
      min-width: 100%;
      background: $background;
      border-radius: $rounded-lg;
      gap: $gap-xs;
      padding: $gap-sm 0;

      &__item {
        @include hover__brightness;
        @include hover__to-color;

        padding: 0 $gap-sm;
      }
    }
  }
}
</style>
