import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  // state
  const unit = ref('celsius')

  // getters
  const unitSymbol = computed(() => (unit.value === 'celsius' ? '℃' : '℉'))

  // getters (파라미터를 받는 형태): 섭씨 원본 값을 현재 단위 설정에 맞춰 변환해준다.
  const convertTemp = computed(() => (celsiusTemp) => {
    if (unit.value === 'fahrenheit') {
      return Math.round((celsiusTemp * 9) / 5 + 32)
    }
    return celsiusTemp
  })

  // actions
  function toggleUnit() {
    unit.value = unit.value === 'celsius' ? 'fahrenheit' : 'celsius'
  }

  // 본인 추가 state/getter/action: 다크 모드 설정도 이 config 스토어에서 함께 관리한다.
  const isDarkMode = ref(false)
  const themeLabel = computed(() => (isDarkMode.value ? '다크 모드' : '라이트 모드'))
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
  }

  return { unit, unitSymbol, convertTemp, toggleUnit, isDarkMode, themeLabel, toggleDarkMode }
})
