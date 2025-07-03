<script setup>
import { Telegram, Whatsapp } from '@/components/Icons'
</script>

<template>
  <div class="header-contacts">
    <a href="" class="header-contacts__contact">
      <Telegram />
    </a>
    <a href="" class="header-contacts__contact">
      <Whatsapp />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.header-contacts {
  @include flex-center;
  gap: $gap-sm;

  &__contact {
    @include button--gray;
  }
}
</style>
