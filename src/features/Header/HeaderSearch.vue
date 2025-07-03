<script setup>
import { Search } from '@/components/Icons'
import { Input } from '@/components/ui/Input'
</script>

<template>
  <div class="header-search">
    <Input placeholder="Поиск товаров...">
      <template #input-post>
        <button class="header-search__button">Найти</button>
        <button class="header-search__button--mobile"><Search /></button>
      </template>
    </Input>
  </div>
</template>

<style scoped lang="scss">
.header-search {
  display: flex;
  gap: $gap-sm;
  width: 100%;

  &__button {
    @include button--primary;
    height: 40px;

    @include max-w('custom', 1200px) {
      display: none;
    }
  }

  &__button--mobile {
    @include button--primary;
    height: 40px !important;
    width: 40px;
    padding: 0 !important;
    display: none;

    @include max-w('custom', 1200px) {
      display: block;
    }
  }
}
</style>
