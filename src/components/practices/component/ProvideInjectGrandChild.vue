<script setup>
import { inject } from 'vue'

// 조상 컴포넌트가 provide한 키 이름을 지정하여 직접 인젝션 유도
const theme = inject('globalTheme')
</script>

<template>
  <div class="grandchild">
    <p>
      손자 컴포넌트가 중간 부모를 거치지 않고 바로 받은 테마: <strong>{{ theme }}</strong>
    </p>
  </div>
</template>

<style scoped>
.grandchild {
  border: 1px dashed #6c5ce7;
  padding: 10px;
}
</style>
