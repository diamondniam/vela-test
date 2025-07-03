<script setup>
import { Logo } from '@/components/Icons'

import HeaderSearch from './HeaderSearch.vue'
import HeaderOthers from './HeaderOthers.vue'
import HeaderTop from './HeaderTop.vue'
import HeaderBurger from './HeaderBurger.vue'
import HeaderContacts from './HeaderContacts.vue'

import { Assembly, Cart, Compare, Favorite } from './Services'
import HeaderLanguage from './HeaderLanguage.vue'
import HeaderMenu from './HeaderMenu/HeaderMenu.vue'

const otherServices = [Favorite, Compare, Cart]
</script>

<template>
  <div class="header">
    <HeaderTop />

    <div class="header__main">
      <button class="header__main__logo">
        <Logo />
        <img src="@public/images/diamondniam.png" alt="Diamond Niam" class="diamondniam" />
      </button>

      <div class="header__main__middle">
        <div class="header__main__middle__top">
          <HeaderBurger />

          <div class="header__main__middle__top__right">
            <HeaderSearch />
            <HeaderContacts />
          </div>
        </div>

        <HeaderOthers />

        <HeaderMenu />
      </div>

      <div class="header__main__right">
        <HeaderLanguage />

        <div class="header__main__right__buttons">
          <div class="header__main__right__buttons__others">
            <component v-for="service in otherServices" :is="service" />
          </div>

          <Assembly />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: $gap-md;

  &__main {
    width: 100%;
    display: flex;
    gap: $gap-sm;
    padding: 0 $gap-lg;

    &__logo {
      @include flex-center;
      @include hover__brightness;
      flex: none;
      width: 80px;
      height: 80px;
      background: $primary;
      color: $background;
      border-radius: 50%;
      position: relative;
    }

    &__middle {
      width: 100%;
      gap: $gap-sm;
      display: flex;
      flex-direction: column;
      position: relative;

      &__top {
        display: flex;
        gap: $gap-sm;

        &__right {
          width: 100%;
          display: flex;
          gap: $gap-sm;
        }
      }
    }

    &__right {
      display: flex;
      align-items: start;
      gap: $gap-sm;

      &__buttons {
        display: flex;
        flex-direction: column;
        gap: $gap-sm;

        &__others {
          display: flex;
          gap: $gap-xs;
        }
      }
    }
  }
}
</style>
