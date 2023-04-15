import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const keyToken = "patkn10QKod0GpMVT.f6a80286640e01313d5036aabd053f94e5f596c79feca1c3d9ae56b301c043b7";
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
