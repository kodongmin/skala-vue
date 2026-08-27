<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="practice-section about-view">
    <h2>About Weather App</h2>
    <p>
      SKALA Full-Stack Engineering 과정의 Frontend-framework: Vue.js 실습으로 만든 미니 날씨
      대시보드입니다. Composition API(ref/computed/watch), 컴포넌트 분리(Props/Emits), Vue Router를
      단계별로 적용하며 완성했고, 다음 챕터에서 Pinia(전역 상태 관리)와 Axios(실제 날씨 API 연동)로
      계속 확장할 예정입니다.
    </p>
    <p>제작: 고동민 · SKALA P035</p>
    <RouterLink to="/">메인 대시보드로 돌아가기</RouterLink>
  </main>
</template>
