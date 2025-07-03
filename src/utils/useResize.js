import { onMounted, onUnmounted, ref } from 'vue'

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export function useResize() {
  const width = ref(0)
  const height = ref(0)

  const resizeHandler = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  return {
    width,
    height,
  }
}
