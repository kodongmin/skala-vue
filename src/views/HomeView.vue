<script setup>
import WeatherMockup from '@/components/practices/basic/WeatherMockup.vue'
</script>

<template>
  <main class="home">
    <h2>SKALA Full-Stack Engineering</h2>
    <p>Frontend-framework: Vue.js 과정 실습 저장소입니다.</p>
    <p>
      상단의 <strong>Vue Syntax 실습</strong> 메뉴에서 3장 예제들을 확인할 수 있고, 이 화면에는 3장
      마지막 과제인 Weather Mockup을 배치했습니다. 이후 챕터(Composition API, Component, Router,
      Pinia, Axios)를 진행하면서 계속 고도화될 예정입니다.
    </p>

    <WeatherMockup />
  </main>
</template>
