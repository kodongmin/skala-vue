<script setup>
import { ref } from 'vue'

const message = ref('안녕하세요!')
const cloakMessage = ref('느린 네트워크에서도 안전하게 출력되는 메시지!')
const onceCount = ref(1)
const memoName = ref('고동민')
const memoAge = ref(20)
</script>

<template>
  <div class="practice-section">
    <h2>v-pre / v-cloak / v-once / v-memo 학습</h2>

    <h3>1) v-pre (템플릿 컴파일 무시)</h3>
    <p>일반 출력: {{ message }}</p>
    <p v-pre>v-pre 출력: {{ message }}</p>

    <h3>2) v-cloak (렌더링 전 노출 방지)</h3>
    <div v-cloak class="cloak-box">
      <p>{{ cloakMessage }}</p>
    </div>

    <h3>3) v-once (최초 1회만 렌더링)</h3>
    <p>일반 변수 (실시간): {{ onceCount }}</p>
    <p v-once>v-once 변수 (최초 고정): {{ onceCount }}</p>
    <button @click="onceCount++">숫자 증가 버튼</button>

    <h3>4) v-memo (지정 변수 변경 시에만 갱신)</h3>
    <div v-memo="[memoName]" class="memo-box">
      <p>📦 v-memo 적용 영역 (기준: memoName)</p>
      <p>이름: {{ memoName }}</p>
      <p>나이: {{ memoAge }} (memoName이 바뀌어야 얘도 갱신됨)</p>
    </div>
    <button @click="memoName = memoName === '고동민' ? '이순신' : '고동민'">1. 이름 변경</button>
    <button @click="memoAge++">2. 나이만 증가</button>
  </div>
</template>

<style scoped>
[v-cloak] {
  display: none !important;
}
.cloak-box {
  padding: 8px;
  background: #eef7ee;
}
.memo-box {
  padding: 12px;
  border: 1px solid #42b883;
  margin-bottom: 10px;
}
</style>
