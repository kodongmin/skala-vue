<script setup>
import { ref } from 'vue'

const rawHtmlData =
  '이 글자는 <span style="color: red; font-weight: bold;">빨간색 굵은 글자</span>이다.'
const content = '안녕하세요! <strong>Skala-Vue</strong> 강의입니다.'

// v-html의 XSS 위험성을 눈으로 확인하기 위한 실습용 입력값
const inputValue = ref('')
const message = ref('')
function showMessage() {
  message.value = inputValue.value
}
</script>

<template>
  <div class="practice-section">
    <h2>v-html / v-text 디렉티브 학습</h2>

    <h3>1) v-html 기본 동작</h3>
    <p>일반 보간법 결과: {{ rawHtmlData }}</p>
    <p v-html="rawHtmlData"></p>

    <h3>2) v-html XSS 위험성 실습</h3>
    <p class="hint">
      아래 입력창에 <code>&lt;img src="x" onerror="alert('XSS!')"&gt;</code> 를 넣고 확인 버튼을
      눌러보면 v-html이 왜 위험한지 확인할 수 있다.
    </p>
    <input v-model="inputValue" placeholder="HTML 태그를 포함해 입력해보세요" />
    <button @click="showMessage">확인</button>
    <div class="xss-box" v-html="message"></div>

    <h3>3) v-text 디렉티브</h3>
    <p v-text="'출력: ' + content"></p>
  </div>
</template>

<style scoped>
.hint {
  font-size: 0.85rem;
  color: #666;
}
.xss-box {
  min-height: 24px;
  border: 1px dashed #ccc;
  padding: 8px;
}
</style>
