<script setup>
import WeatherParent from '@/components/exercise/WeatherParent.vue'
</script>

<template>
  <main class="home">
    <h2>SKALA Full-Stack Engineering</h2>
    <p>Frontend-framework: Vue.js 과정 실습 저장소입니다.</p>
    <p>
      상단 메뉴에서 챕터별 실습을 확인할 수 있고, 이 화면에는 5장 과제인 Weather Component(컴포넌트
      분리)를 배치했습니다: <code>WeatherParent</code>가 모든 상태를 소유하고,
      <code>BaseDashboardCard</code>· <code>SearchBar</code>·<code>WeatherCard</code>를 조립해서
      화면을 구성합니다. 이후 챕터(Router, Pinia, Axios)를 진행하면서 계속 고도화될 예정입니다.
    </p>

    <WeatherParent />
  </main>
</template>
