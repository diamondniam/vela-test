<script setup>
import {
  Arrow,
  Burger,
  ChestBlue,
  Flame,
  Laptop,
  Lightning,
  Monitor,
  Monster,
  PhoneBlue,
  Quest,
  Speaker,
} from '@/components/Icons'
import menu from '@public/data/header-menu--mobile/menu.json'
import { nextTick, onMounted, ref, watch } from 'vue'
import HeaderMenuMobileMainItem from './HeaderMenuMobileMainItem.vue'
import { useHeaderMenuMobile } from './store'
import HeaderMenuMobileMainItemHeader from './HeaderMenuMobileMainItemHeader.vue'

const mainRef = ref(null)
const ANIMATION_DURAITON = 0.7

const iconsMap = {
  Burger,
  Flame,
  ChestBlue,
  Lightning,
  Quest,
  Monster,
  Monitor,
  PhoneBlue,
  Laptop,
  Speaker,
}

const headerMenuMobileStore = useHeaderMenuMobile()
const removeTimeout = ref(null)
const isAnimating = ref(false)

const handleButtonClick = (e, item) => {
  if (item.type === 'button' && !isAnimating.value) {
    if (headerMenuMobileStore.selection[headerMenuMobileStore.selection.length - 1] !== item.id) {
      headerMenuMobileStore.increaseStep()
      headerMenuMobileStore.addSelection(item.id)
    }
  }
}

const handleBackButtonClick = () => {
  isAnimating.value = true
  clearTimeout(removeTimeout.value)
  headerMenuMobileStore.decreaseStep()

  removeTimeout.value = setTimeout(() => {
    const stepsElements = mainRef.value.querySelectorAll('.header-menu-mobile-main__step')
    if (headerMenuMobileStore.step === 1) {
      for (let i = 0; i < stepsElements.length; i++) {
        const item = stepsElements[i]
        if (i !== 0) {
          item.style.height = '0'
        }
      }
    }
    isAnimating.value = false
    headerMenuMobileStore.popSelection()
  }, ANIMATION_DURAITON * 1000)
}

const getActiveItem = (i) => {
  let result = menu
  let item = null
  const selection = headerMenuMobileStore.selection

  Array.from({ length: i - 1 }).forEach((_, j) => {
    const next = result.find((menuItem) => menuItem.id === selection[j])
    if (next) {
      result = next.subMenu
    }
    if (j === i - 2) {
      item = next
    }
  })

  return { result, item }
}

watch(
  () => headerMenuMobileStore.step,
  (step) => {
    nextTick(() => {
      const stepsElements = mainRef.value.querySelectorAll('.header-menu-mobile-main__step')
      const active = stepsElements[step - 1]

      stepsElements.forEach((item, i) => {
        item.style.height = 'auto'
      })

      active.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: 'smooth',
      })
    })
  },
)

onMounted(() => {
  const stepsElements = mainRef.value.querySelectorAll('.header-menu-mobile-main__step')

  stepsElements.forEach((item, i) => {
    item.style.height = 'auto'
  })

  headerMenuMobileStore.setSelection([])
  headerMenuMobileStore.setStep(1)
})
</script>

<template>
  <div ref="mainRef" class="header-menu-mobile-main">
    <div
      v-for="i in headerMenuMobileStore.step + 1"
      :key="i"
      :class="`header-menu-mobile-main__step ${i === headerMenuMobileStore.step ? 'header-menu-mobile-main__step--active' : ''}`"
    >
      <HeaderMenuMobileMainItemHeader
        v-if="i > 1"
        :active="getActiveItem(i)?.item"
        :i="i"
        :current-step="headerMenuMobileStore.step"
        @click="handleBackButtonClick"
      />

      <HeaderMenuMobileMainItem
        v-for="item in getActiveItem(i)?.result"
        :key="item.id"
        :item="item"
        :icons-map="iconsMap"
        :tabindex="i === headerMenuMobileStore.step ? 0 : -1"
        @click="(e) => handleButtonClick(e, item)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-menu-mobile-main {
  flex: none;
  display: flex;
  overflow: hidden;

  &__step {
    flex: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $gap-xs;
    padding: 0 $gap-xs;
    height: 0;
  }

  &__step--active {
    height: auto;
  }
}
</style>
