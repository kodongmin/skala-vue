<script setup>
import { ref } from 'vue'

const isLogged = ref(false)
const score = ref(85)
const isVisible = ref(true)
</script>

<template>
  <div class="practice-section">
    <h2>v-if / v-else-if / v-else / v-show 학습</h2>

    <h3>1) 로그인 상태 스위치 (v-if / v-else)</h3>
    <p v-if="isLogged">환영합니다! 회원 전용 화면입니다.</p>
    <p v-else>로그인이 필요합니다. 먼저 로그인해 주세요.</p>
    <button @click="isLogged = !isLogged">{{ isLogged ? '로그아웃 하기' : '로그인 하기' }}</button>

    <h3>2) 성적별 학점 등급 (다중 조건문)</h3>
    <label>현재 점수 입력: </label>
    <input type="number" v-model="score" min="0" max="100" step="5" />
    <div v-if="score >= 90" class="grade grade-a">합격 등급: A 학점 (훌륭합니다!)</div>
    <div v-else-if="score >= 80" class="grade grade-b">합격 등급: B 학점 (양호합니다.)</div>
    <div v-else-if="score >= 70" class="grade grade-c">합격 등급: C 학점 (조금 더 분발하세요.)</div>
    <div v-else class="grade grade-f">합격 등급: F 학점 (재시험 대상입니다.)</div>

    <h3>3) v-show (DOM 유지, CSS만 토글)</h3>
    <button @click="isVisible = !isVisible">화면 토글하기</button>
    <div v-show="isVisible" class="box">
      <p>v-show 상자 (조건이 false가 되면 display: none이 붙는다)</p>
    </div>
  </div>
</template>

<style scoped>
.grade-a {
  color: green;
  font-weight: bold;
}
.grade-b {
  color: blue;
}
.grade-c {
  color: orange;
}
.grade-f {
  color: red;
  font-weight: bold;
}
.box {
  padding: 10px;
  margin-top: 5px;
  color: white;
  border-radius: 5px;
  background-color: #3498db;
}
</style>
