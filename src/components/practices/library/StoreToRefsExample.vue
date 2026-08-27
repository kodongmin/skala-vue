<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter.js'

const counterStore = useCounterStore()

// state/getters는 storeToRefs로 감싸야 반응형 연결이 유지된다. (actions는 그냥 구조분해해도 무방)
const { count, doubleCount } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<template>
  <div class="practice-section">
    <h2>storeToRefs 학습</h2>
    <p>
      구조분해로 꺼낸 count: <strong>{{ count }}</strong> / doubleCount:
      <strong>{{ doubleCount }}</strong>
    </p>
    <button @click="increment">증가 (actions는 그냥 구조분해해도 OK)</button>
    <p class="hint">
      만약 <code>const { count } = counterStore</code> 처럼 storeToRefs 없이 바로 구조분해하면,
      count는 그 순간의 숫자 값으로 복사되어 버려서 이후 store가 바뀌어도 화면이 갱신되지 않는다.
    </p>
  </div>
</template>

<style scoped>
.hint {
  font-size: 0.85rem;
  color: #666;
}
</style>
