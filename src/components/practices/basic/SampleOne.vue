<script setup>
import { ref } from 'vue'

// 1. 일반 변수 (화면이 실시간으로 바뀌지 않음)
let normalCount = 0

// 2. 반응성 변수 (화면이 실시간으로 바뀜)
const vueCount = ref(0)

// 일반 변수는 값은 바뀌지만 화면을 다시 그리라고 알려주지 않으므로,
// vueCount를 눌러 강제로 리렌더링을 시켜야 normalCount도 같이 반영된다.
</script>

<template>
  <div class="practice-section">
    <h2>Hello Skala-Vue</h2>
    <h3>일반 변수 클릭: {{ normalCount }}</h3>
    <button @click="normalCount++">일반 변수 증가</button>
    <br />
    <h3>Vue 반응성 변수 클릭: {{ vueCount }}</h3>
    <button @click="vueCount++">Vue 변수 증가</button>
  </div>
</template>
