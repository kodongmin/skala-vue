<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="practice-section not-found-view">
    <h2>404 - 페이지를 찾을 수 없습니다</h2>
    <p>요청하신 주소가 존재하지 않거나 이동되었습니다.</p>
    <RouterLink to="/">메인 대시보드로 돌아가기</RouterLink>
  </main>
</template>
