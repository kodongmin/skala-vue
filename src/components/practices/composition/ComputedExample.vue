<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const dummy = ref(0) // computed와 무관한 변수

// 1. 일반 함수: 화면이 조금이라도 리렌더링되면 무조건 재실행
const getMethodResult = () => {
  console.log('❌ 일반 함수 실행됨!')
  return count.value * 2
}

// 2. Computed: count가 바뀔 때만 재연산 (dummy가 바뀔 땐 이전 값 재사용/캐싱)
const doubleCount = computed(() => {
  console.log('✅ Computed 연산 실행됨!')
  return count.value * 2
})
</script>

<template>
  <div class="practice-section">
    <h2>computed() 캐싱 동작 비교</h2>
    <p>count: {{ count }} | dummy: {{ dummy }}</p>
    <button @click="count++">count 증가 (의존성 변경)</button>
    <button @click="dummy++">dummy 증가 (무관한 변경)</button>
    <p>일반 함수 결과: {{ getMethodResult() }}</p>
    <p>Computed 결과: {{ doubleCount }}</p>
    <p class="hint">
      콘솔(F12)을 열고 두 버튼을 각각 눌러보면, dummy 버튼을 눌렀을 때는 일반 함수 로그만 찍히고
      computed 로그는 찍히지 않는 것을 확인할 수 있다.
    </p>
  </div>
</template>

<style scoped>
.hint {
  font-size: 0.85rem;
  color: #666;
}
</style>
