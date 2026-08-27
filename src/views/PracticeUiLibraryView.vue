<script setup>
import ElementFormExample from '@/components/practices/library/ElementFormExample.vue'
import ElementProductExample from '@/components/practices/library/ElementProductExample.vue'
import ElementFileExample from '@/components/practices/library/ElementFileExample.vue'
</script>

<template>
  <div class="practice-page">
    <h1>9장. UI Libraries (Element Plus) 실습 모음</h1>
    <p class="lead">
      Element Plus의 Form/Data/Feedback 계열 컴포넌트를 조합한 Code Challenge 3종입니다. 실제
      Weather App에도 Element Plus를 적용해 카드, 입력창, 버튼, 태그, 알림을 교체했습니다.
    </p>

    <ElementFormExample />
    <ElementProductExample />
    <ElementFileExample />
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
