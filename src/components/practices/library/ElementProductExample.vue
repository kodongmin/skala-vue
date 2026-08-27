<script setup>
import { ref } from 'vue'

const productQuantity = ref(1) // 수량 카운터 기본값
const productRate = ref(4) // 별점 기본값 (별 4개)
</script>

<template>
  <div class="practice-section">
    <h2>Element Plus - 상품 수량 / 별점</h2>
    <el-card class="box-card">
      <template #header>
        <span>수원 여행 기념품</span>
      </template>
      <p>구매 수량</p>
      <el-input-number v-model="productQuantity" :min="1" :max="10" />
      <p style="margin-top: 12px">평점</p>
      <el-rate v-model="productRate" />
      <p class="summary">선택: {{ productQuantity }}개 / 평점 {{ productRate }}점</p>
    </el-card>
  </div>
</template>

<style scoped>
.box-card {
  max-width: 360px;
}
.summary {
  margin-top: 12px;
  color: #666;
  font-size: 0.9rem;
}
</style>
