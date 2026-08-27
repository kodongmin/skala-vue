<script setup>
import { useCounterStore } from '@/stores/counter.js'

const counterStore = useCounterStore()
</script>

<template>
  <div class="practice-section">
    <h2>Counter Store 활용 실습</h2>
    <p>
      원본 카운트 데이터(state): <strong>{{ counterStore.count }}</strong>
    </p>
    <p>
      2배 연산 데이터(getters): <span>{{ counterStore.doubleCount }}</span>
    </p>
    <button @click="counterStore.increment">숫자 1 증가 (actions)</button>
    <p class="hint">
      Vue Devtools의 Pinia 탭을 열어두면, 버튼을 누를 때마다 store의 state가 실시간으로 바뀌는 것을
      확인할 수 있다.
    </p>
  </div>
</template>

<style scoped>
.hint {
  font-size: 0.85rem;
  color: #666;
}
</style>
