<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const count = ref(0)
let timerId = null

console.log('1. [setup] 컴포넌트가 메모리에 생성되었습니다. (DOM 접근 불가능)')

onMounted(() => {
  console.log('2. [onMounted] 화면에 완벽히 부착되었습니다! (API 호출/DOM 조작 적기)')
  timerId = setInterval(() => {
    count.value++
  }, 3000)
})

onUpdated(() => {
  console.log(
    `3. [onUpdated] 데이터가 변경되어 화면을 새로 그렸습니다. (현재 count: ${count.value})`,
  )
})

onUnmounted(() => {
  clearInterval(timerId)
  console.log('4. [onUnmounted] 컴포넌트가 소멸했습니다. 타이머 청소 완료!')
})
</script>

<template>
  <div class="practice-section">
    <h2>Component Lifecycle Hook 학습</h2>
    <p>
      3초마다 자동으로 증가하는 카운트: <strong>{{ count }}</strong>
    </p>
    <p class="hint">
      콘솔(F12)을 열어두면 setup → onMounted → onUpdated 순서로 로그가 찍히는 것을 확인할 수 있다.
    </p>
  </div>
</template>

<style scoped>
.hint {
  font-size: 0.85rem;
  color: #666;
}
</style>
