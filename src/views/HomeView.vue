<script setup>
import WeatherMockup from '@/components/practices/basic/WeatherMockup.vue'
</script>

<template>
  <main class="home">
    <h2>SKALA Full-Stack Engineering</h2>
    <p>Frontend-framework: Vue.js 과정 실습 저장소입니다.</p>
    <p>
      상단 메뉴에서 챕터별 실습을 확인할 수 있고, 이 화면에는 4장 과제인 Weather Composition을
      배치했습니다(computed 필터링 + watch/watchEffect 로깅). 이후 챕터(Component, Router, Pinia,
      Axios)를 진행하면서 계속 고도화될 예정입니다.
    </p>

    <WeatherMockup />
  </main>
</template>
