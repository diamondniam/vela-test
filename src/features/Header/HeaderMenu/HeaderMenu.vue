<script setup>
import headerMenu from '@public/data/header-menu.json'
import { PhoneBlue, Laptop, Monitor, Speaker, Flame, Lightning, Arrow } from '@/components/Icons'
import { computed, onMounted, ref } from 'vue'
import { useClickOutside } from '@/utils'
import { useHeader } from '../store'

const headerStore = useHeader()

const headerMenuRef = ref(null)
const iconMap = { PhoneBlue, Laptop, Monitor, Speaker, Flame, Lightning }

const active = ref(1)

const getSubtypes = computed(() => {
  return headerMenu[active.value - 1].subMenu
})

useClickOutside(headerMenuRef, (e) => {
  const burger = document.querySelector('.header-burger')

  const elements = [burger, headerMenuRef.value]

  const clickedOutside = elements.every((el) => {
    return el && !el.contains(e.target)
  })

  if (clickedOutside) {
    headerStore.setActive(false)
  }
})
</script>

<template>
  <Transition name="fade__slide-up">
    <div v-if="headerStore.active" ref="headerMenuRef" class="header-menu">
      <div class="header-menu__types">
        <TransitionGroup name="fade" mode="out-in">
          <button
            v-for="(item, index) in headerMenu"
            :key="item.id"
            :class="`header-menu__types__item ${active === index + 1 ? 'header-menu__types__item__active' : ''}`"
            @click="active = index + 1"
          >
            <div v-if="index !== 0" class="header-menu__types__item__divider"></div>

            <div class="header-menu__types__item__button">
              <div class="header-menu__types__item__button__inner">
                <component :is="iconMap[item.icon]" class="image" />

                {{ item.title }}
              </div>

              <Arrow
                v-if="item.type === 'button'"
                class="header-menu__types__item__button__arrow"
              />
            </div>
          </button>
        </TransitionGroup>
      </div>

      <div class="header-menu__subtypes">
        <div v-for="item in getSubtypes" :key="item.id" class="header-menu__subtypes__subtype">
          <div v-if="getSubtypes.length !== 1" class="header-menu__subtypes__subtype__title">
            {{ item.title }}
          </div>

          <div class="header-menu__subtypes__subtype__items">
            <a
              v-for="subitem in item.subMenu"
              :key="subitem.id"
              href=""
              class="header-menu__subtypes__subtype__items__item"
            >
              <span class="header-menu__subtypes__subtype__items__item__title">{{
                subitem.title
              }}</span>

              <span class="header-menu__subtypes__subtype__items__item__quantity">
                {{ subitem.quantity }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.header-menu {
  display: flex;
  position: absolute;
  z-index: 1;
  background: $background;
  padding: $gap-lg 0;
  width: 100%;
  top: 100%;
  border-radius: $rounded-lg;
  @include shadow(2);

  &__types {
    display: flex;
    width: 80%;
    flex-direction: column;
    border-right: 1px solid $background-secondary;

    &__item {
      &__button {
        @include button;
        @include transition();
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 $gap-sm;
        gap: $gap-xs;
        border-radius: 0;

        & .image {
          @include transition();
          width: 20px;
          height: 20px;
          color: $primary-lighter;
        }

        &:active {
          filter: brightness(0.95);
        }

        &:hover {
          background: $background-secondary;

          & .image {
            color: $primary;
          }

          & .header-menu__types__item__button__arrow {
            opacity: 0.5;
          }
        }

        @include max-w('md') {
          &:hover {
            background: transparent;

            & .image {
              color: $primary-lighter;
            }

            & .header-menu__types__item__button__arrow {
              opacity: 0.2;
            }
          }

          &:active {
            background: $background-secondary;

            & .image {
              color: $primary;
            }

            & .header-menu__types__item__button__arrow {
              opacity: 0.5;
            }
          }
        }

        &__inner {
          @include flex-center;
          gap: $gap-xs;
        }

        &__arrow {
          @include transition();
          color: $foreground;
          opacity: 0.2;
        }
      }

      &__divider {
        width: 100%;
        height: 1px;
        background: $background-secondary;
      }
    }

    &__item__active {
      background: $background-secondary;
      & .image {
        color: $primary;
      }

      & .header-menu__types__item__button__arrow {
        opacity: 1 !important;
        color: $primary;
      }
    }
  }

  &__subtypes {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: $gap-sm;
    padding: 0 $gap-sm;

    &__subtype {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: $gap-sm;

      &__title {
        @include text($size: 'lg', $weight: 'medium');
      }

      &__items {
        @include small-scrollbar;
        display: flex;
        flex-direction: column;
        overflow: auto;
        gap: $gap-xs;
        max-height: 250px;
        padding-right: $gap-xs;

        &__item {
          display: flex;
          gap: $gap-xs;
          align-items: center;

          &__title {
            @include text($size: 'sm', $weight: 'medium');
          }

          &__quantity {
            @include text($size: 'sm');
            color: $foreground;
            opacity: 0.5;
          }

          &:hover {
            & .header-menu__subtypes__subtype__items__item__title {
              color: $primary;
            }

            & .header-menu__subtypes__subtype__items__item__quantity {
              color: $primary;
              opacity: 1;
            }
          }

          @include max-w('md') {
            &:hover {
              & .header-menu__subtypes__subtype__items__item__title {
                color: $foreground;
              }

              & .header-menu__subtypes__subtype__items__item__quantity {
                color: $foreground;
                opacity: 0.5;
              }
            }

            &:active {
              & .header-menu__subtypes__subtype__items__item__title {
                color: $primary;
              }

              & .header-menu__subtypes__subtype__items__item__quantity {
                color: $primary;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
