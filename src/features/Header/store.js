import { defineStore } from 'pinia'

export const useHeader = defineStore('header', {
  state: () => ({
    active: false,
  }),
  actions: {
    setActive(value) {
      this.active = value
    },
  },
})
