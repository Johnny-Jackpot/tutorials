import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target: EventTarget, event: string, callback: EventListener) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
