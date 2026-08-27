<script setup>
import { ref, provide } from 'vue'
import ProvideInjectMiddleChild from './ProvideInjectMiddleChild.vue'

const themeColor = ref('dark-mode')
// 주입할 키(Key) 이름과 실제 데이터(Value)를 등록
provide('globalTheme', themeColor)
</script>

<template>
  <div class="practice-section">
    <h2>Provide / Inject (Props Drilling 우회)</h2>
    <p>
      최상위(조상) 컴포넌트에서 선언한 테마: <strong>{{ themeColor }}</strong>
    </p>
    <button @click="themeColor = themeColor === 'dark-mode' ? 'light-mode' : 'dark-mode'">
      테마 토글
    </button>
    <ProvideInjectMiddleChild />
  </div>
</template>
