<script setup>
import { ChestGray } from '@/components/Icons'
</script>

<template>
  <button class="header__services__button">
    <span class="header__services__button__count">3</span>

    <ChestGray />
  </button>
</template>

<style scoped lang="scss">
.header__services__button {
  position: relative;

  &__count {
    @include flex-center;
    @include text($size: 'xs');
    position: absolute;
    right: 5%;
    top: 5%;
    color: $background;
    background: $primary;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
}
</style>
