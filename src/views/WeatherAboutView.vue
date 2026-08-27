<script setup>
import { RouterLink } from 'vue-router'

// Vite 환경 변수 참조: 빌드 모드(--mode)에 따라 .env.staging / .env.production 값이 주입된다.
const buildMode = import.meta.env.VITE_APP_MODE ?? '개발 모드 (dev)'
console.log('현재 빌드 모드:', import.meta.env.MODE)
console.log('현재 API URL:', import.meta.env.VITE_API_URL)
</script>

<template>
  <main class="practice-section about-view">
    <h2>About Weather App</h2>
    <p>
      SKALA Full-Stack Engineering 과정의 Frontend-framework: Vue.js 실습으로 만든 미니 날씨
      대시보드입니다. Composition API(ref/computed/watch), 컴포넌트 분리(Props/Emits), Vue Router,
      Pinia(단위 토글), Axios(실시간 OpenWeatherMap 연동), Element Plus(UI Library)를 단계별로
      적용하며 완성했습니다.
    </p>
    <p>제작: 고동민 · SKALA P035</p>
    <p class="build-mode">
      현재 빌드 모드: <code>{{ buildMode }}</code>
    </p>
    <RouterLink to="/">메인 대시보드로 돌아가기</RouterLink>
  </main>
</template>

<style scoped>
.build-mode {
  font-size: 0.85rem;
  color: #999;
}
</style>
