<script setup>
import { ref } from 'vue'

// 1. 기본 v-bind
const dynamicUrl = 'https://www.naver.com'
const logoImgSrc = 'https://vuejs.org/images/logo.png'
const isButtonDisabled = ref(true)

// 2. 클래스 바인딩
const isWarning = ref(false)
const themeClass = ref('bg-dark')

// 3. 스타일 바인딩
const textColor = ref('purple')
const boxWidth = ref(150)

// 4. 동일 이름 축약 문법 (Vue 3.4+)
const id = 'dm-profile-card'
const src = 'https://vuejs.org/images/logo.png'
</script>

<template>
  <div class="practice-section">
    <h2>v-bind 디렉티브 학습</h2>

    <h3>1) 기본 바인딩</h3>
    <a :href="dynamicUrl" target="_blank">여기를 클릭하면 네이버로 이동합니다</a>
    <br />
    <img :src="logoImgSrc" alt="Vue 로고" style="width: 80px" />
    <br />
    <p>현재 버튼 사용 불가능 상태: {{ isButtonDisabled }}</p>
    <button :disabled="isButtonDisabled">동의해야 클릭할 수 있는 버튼</button>
    <button @click="isButtonDisabled = !isButtonDisabled">위 버튼 잠금 해제/토글</button>

    <h3>2) 클래스 바인딩 (객체 / 배열)</h3>
    <p :class="{ 'text-danger': isWarning }">현재 경고 상태: {{ isWarning }}</p>
    <button @click="isWarning = !isWarning">경고 상태 토글</button>
    <div :class="[themeClass, isWarning ? 'border-red' : 'border-gray']">
      다중 클래스가 조립된 박스
    </div>

    <h3>3) 스타일 바인딩 (객체 / 배열)</h3>
    <p :style="{ color: textColor, fontWeight: 'bold' }">이 글자의 색상은 실시간으로 바뀝니다.</p>
    <button @click="textColor = textColor === 'purple' ? 'blue' : 'purple'">글자 색상 토글</button>
    <label>박스 가로 크기(px): </label>
    <input type="number" v-model="boxWidth" step="10" />
    <div
      :style="[
        { backgroundColor: '#42b883', transition: 'all 0.3s ease' },
        { width: boxWidth + 'px' },
      ]"
      class="width-box"
    >
      {{ boxWidth }}px
    </div>

    <h3>4) 동일 이름 축약 문법</h3>
    <div :id>
      <img :src alt="Vue 로고" style="width: 40px" />
    </div>
  </div>
</template>

<style scoped>
.text-danger {
  color: red;
  font-weight: bold;
}
.bg-dark {
  background-color: #333;
  color: white;
  padding: 15px;
}
.border-red {
  border: 3px solid red;
}
.border-gray {
  border: 3px solid #ccc;
}
.width-box {
  color: white;
  padding: 10px;
  text-align: center;
}
</style>
