<script setup>
import AxiosJsonExample from '@/components/practices/axios/AxiosJsonExample.vue'
import AxiosAsyncFlowExample from '@/components/practices/axios/AxiosAsyncFlowExample.vue'
</script>

<template>
  <div class="practice-page">
    <h1>8장. Axios 실습 모음</h1>
    <p class="lead">
      JSONPlaceholder를 이용한 REST API CRUD와 Promise(.then) vs async/await 실행 순서 비교입니다.
      실제 날씨 API(OpenWeatherMap) 연동은 API 키를 발급받은 뒤 Weather Axios 과제로 이어집니다.
    </p>

    <AxiosJsonExample />
    <AxiosAsyncFlowExample />
  </div>
</template>

<style scoped>
.practice-page {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px;
}
.lead {
  color: #666;
  margin-bottom: 24px;
}
</style>
