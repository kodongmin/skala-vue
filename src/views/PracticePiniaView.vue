<script setup>
import StoreCounterExample from '@/components/practices/library/StoreCounterExample.vue'
import StoreToRefsExample from '@/components/practices/library/StoreToRefsExample.vue'
</script>

<template>
  <div class="practice-page">
    <h1>7장. Pinia 실습 모음</h1>
    <p class="lead">
      전역 상태 관리 라이브러리 Pinia의 counter 스토어 예제와 storeToRefs 사용법입니다. 실제 날씨
      앱에 적용한 단위(℃/℉) 토글은 상단 네비게이션 바의 버튼과 Home/상세 화면에서 확인할 수
      있습니다.
    </p>

    <StoreCounterExample />
    <StoreToRefsExample />
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
