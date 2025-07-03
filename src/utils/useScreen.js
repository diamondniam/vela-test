import { defineStore } from 'pinia'

export const useScreen = defineStore('screen', {
  state: () => ({
    isLocked: false,
    width: window.innerWidth,
    height: window.innerHeight,
  }),
  actions: {
    lock() {
      this.isLocked = true
    },
    unlock() {
      this.isLocked = false
    },
  },
})

// export function lockScreen() {
//   const scrollY = window.scrollY.toString()
//   document.documentElement.classList.add('scroll-lock')
//   document.documentElement.dataset.scrollY = scrollY
//   document.body.style.top = `-${scrollY}px`
// }

// export function unlockScreen() {
//   const scrollY = document.documentElement.dataset.scrollY || '0'
//   document.documentElement.classList.remove('scroll-lock')
//   document.body.style.top = ''
//   window.scrollTo(0, parseInt(scrollY))
// }

// export function lockScreen() {
//   const scrollY = window.scrollY
//   document.body.style.position = 'fixed'
//   document.body.style.top = `-${scrollY}px`
//   document.body.style.width = '100%'
//   document.body.dataset.scrollY = scrollY
//   useScreen().lock()
// }

// export function unlockScreen() {
//   const scrollY = document.body.dataset.scrollY || '0'
//   document.body.style.position = ''
//   document.body.style.top = ''
//   document.body.style.width = ''
//   window.scrollTo(0, parseInt(scrollY))
// }

export function lockScreen() {
  const scrollY = window.scrollY
  document.body.dataset.scrollY = String(scrollY)

  document.documentElement.classList.add('scroll-lock')
  document.body.style.top = `-${scrollY}px`
}

export function unlockScreen() {
  const scrollY = parseInt(document.body.dataset.scrollY || '0', 10)

  document.documentElement.classList.remove('scroll-lock')
  document.body.style.top = ''
  window.scrollTo(0, scrollY)
}
