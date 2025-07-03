<script setup>
import { Logo } from '@/components/Icons'

import HeaderSearch from './HeaderSearch.vue'
import HeaderTop from './HeaderTop.vue'
import { Cart, Compare, Favorite } from './Services'
import HeaderBurger from './HeaderBurger.vue'
import HeaderMenuMobile from './HeaderMenuMobile/HeaderMenuMobile.vue'
</script>

<template>
  <div class="header-mobile">
    <HeaderTop />

    <div class="header-mobile__main">
      <div class="header-mobile__main__inner">
        <div class="header-mobile__main__inner__left">
          <HeaderBurger />
          <Compare />
        </div>

        <button class="header-mobile__main__inner__middle">
          <Logo />
          <img src="@public/images/diamondniam.png" alt="Diamond Niam" class="diamondniam" />
        </button>

        <div class="header-mobile__main__inner__right">
          <Favorite />
          <Cart />
        </div>
      </div>

      <HeaderSearch />
    </div>

    <HeaderMenuMobile />
  </div>
</template>

<style lang="scss" scoped>
@import './Services';

.header-mobile {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: $gap-sm;

  &__main {
    display: flex;
    flex-direction: column;
    padding: 0 $gap-xs;
    gap: $gap-xs;

    &__inner {
      display: flex;
      justify-content: space-between;

      &__left,
      &__right {
        display: flex;
        gap: $gap-xs;
      }

      &__middle {
        @include flex-center;
        @include hover__brightness;
        flex: none;
        width: 56px;
        height: 56px;
        background: $primary;
        color: $background;
        border-radius: 50%;
        position: relative;

        & svg {
          width: 28px;
          height: 28px;
        }
      }
    }
  }
}
</style>
