<script setup>
import { PhoneGray, Position } from '@/components/Icons'
import { ref } from 'vue'
import HeaderLanguage from './HeaderLanguage.vue'

const dateRange = ref(['9:00', '21:00'])
const phone = ref('+7 (999) 999-99-99')
const location = ref('Сайлент-Хилл')

const info = [
  {
    id: 'delivery',
    title: 'Доставка',
  },
  {
    id: 'payment',
    title: 'Оплата',
  },
  {
    id: 'contacts',
    title: 'Контакты',
  },
]
</script>

<template>
  <div class="header-top">
    <HeaderLanguage class="header-top__language" />

    <div class="header-top__contacts">
      <button class="location">
        <div class="image"><Position /></div>
        {{ location }}
      </button>

      <button class="phone">
        <div class="image"><PhoneGray /></div>
        {{ phone }}
      </button>
    </div>

    <div class="header-top__dates">Ежендневно: {{ dateRange[0] }} - {{ dateRange[1] }}</div>

    <div class="header-top__info">
      <button v-for="item in info" :key="item.id" class="header-top__info__item">
        {{ item.title }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-top {
  display: flex;
  height: 34px;
  background: $background-secondary;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 0 $gap-lg;

  @include max-w('custom', 1200px) {
    padding: 0 $gap-xs;
  }

  &__language {
    display: none;

    @include max-w('custom', 1200px) {
      display: flex;
    }
  }

  &__contacts {
    @include flex-center;
    gap: $gap-sm;

    & button {
      @include flex-center;
      @include hover__to-color;
      gap: $gap-xs;

      & .image {
        @include flex-center;
      }
    }

    & .location {
      @include max-w('custom', 1200px) {
        display: none;
      }
    }
  }

  &__dates {
    @include max-w('custom', 1200px) {
      display: none;
    }
  }

  &__info {
    display: flex;
    gap: $gap-xs;

    &__item {
      @include hover__to-color;
    }

    @include max-w('custom', 1200px) {
      display: none;
    }
  }
}
</style>
