<script setup>
import { Position, Time } from '@/components/Icons'
import { Assembly } from '../Services'
import HeaderMenuMobileMain from './HeaderMenuMobileMain.vue'
import HeaderContacts from '../HeaderContacts.vue'
import { ref } from 'vue'
import { useHeader } from '../store'

const dateRange = ref(['9:00', '21:00'])
const location = ref('Сайлент-Хилл')

const headerStore = useHeader()

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
  <Transition name="fade__slide-left" mode="out-in">
    <div v-if="headerStore.active" class="header-menu-mobile">
      <div class="header-menu-mobile__contacts">
        <div class="header-menu-mobile__contacts__left">
          <div class="header-menu-mobile__contacts__left__item">
            <div class="image"><Position /></div>
            {{ location }}
          </div>

          <div class="header-menu-mobile__contacts__left__item">
            <div class="image"><Time /></div>
            Ежендневно: {{ dateRange[0] }} - {{ dateRange[1] }}
          </div>
        </div>

        <HeaderContacts />
      </div>

      <HeaderMenuMobileMain />

      <div class="header-menu-mobile__assembly">
        <Assembly />
      </div>

      <div class="header-menu-mobile__info">
        <a v-for="item in info" :key="item.id" class="header-menu-mobile__info__item">
          {{ item.title }}
        </a>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import '../Services';

.header-menu-mobile {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 100%;
  height: calc(100vh - 120px);
  overflow: auto;
  z-index: 1;
  gap: $gap-sm;
  background: $background;
  padding-bottom: 150px;
  padding-top: 20px;

  &__contacts {
    display: flex;
    gap: $gap-sm;
    justify-content: space-between;
    padding: 0 $gap-xs;

    &__left {
      @include text($size: 'sm');
      display: flex;
      flex-direction: column;
      gap: $gap-xs;

      &__item {
        display: flex;
        align-items: center;
        gap: $gap-xs;
        line-height: normal;

        .image {
          flex: none;
          width: 16px;
          height: 16px;
        }
      }
    }
  }

  &__assembly {
    width: 100%;
    padding: 0 $gap-xs;

    & button {
      width: 100%;
      padding: 0%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: $gap-xs;
    padding: 0 $gap-xs;

    &__item {
      @include hover__to-color($color: $primary, $last-color: $foreground);
      border-bottom: 1px solid $background-secondary;
      padding: $gap-xs 0;
    }
  }
}
</style>
