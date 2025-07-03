import { onMounted, onUnmounted } from 'vue'

export function useClickOutside(ref, handler) {
  const handleClickOutside = (event) => {
    if (ref.value && !ref.value.contains(event.target)) {
      handler(event)
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })
}
