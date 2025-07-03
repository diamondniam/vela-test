import { defineStore } from 'pinia'

export const useHeaderMenuMobile = defineStore('headerMenuMobile', {
  state: () => ({
    step: 1,
    selection: [],
  }),
  actions: {
    setSelection(value) {
      this.selection = value
    },
    addSelection(value) {
      this.selection.push(value)
    },
    popSelection() {
      this.selection.pop()
    },
    removeSelection(value) {
      this.selection = this.selection.filter((item) => item !== value)
    },
    increaseStep() {
      this.step++
    },
    decreaseStep() {
      if (this.step === 1) return

      this.step--
    },
  },
})
