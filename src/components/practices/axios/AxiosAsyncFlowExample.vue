<script setup>
import { ref } from 'vue'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/posts/1'
const log = ref([])

const addLog = (text) => {
  log.value.push(text)
  console.log(text)
}

// Promise.then() 방식: 통신 요청 이후 코드가 응답을 기다리지 않고 먼저 실행된다.
const fetchWithPromise = () => {
  log.value = []
  addLog('1. 통신 시작 구역')
  axios.get(URL).then((response) => {
    addLog(`3. 데이터 도착: ${response.data.title}`)
  })
  addLog('2. 통신 요청 직후 라인')
}

// async/await 방식: await를 만나면 해당 함수 내부는 잠시 멈추고, 데이터가 도착한 후 이어서 실행된다.
const fetchWithAsync = async () => {
  log.value = []
  addLog('1. 통신 시작 구역')
  const response = await axios.get(URL)
  addLog(`2. 데이터 도착: ${response.data.title}`)
  addLog('3. 모든 통신 프로세스가 완전히 끝난 후 실행되는 라인')
}
</script>

<template>
  <div class="practice-section">
    <h2>Promise(.then) vs async/await 실행 순서 비교</h2>
    <button @click="fetchWithPromise">Promise 방식으로 호출</button>
    <button @click="fetchWithAsync">async/await 방식으로 호출</button>
    <ol>
      <li v-for="(line, index) in log" :key="index">{{ line }}</li>
    </ol>
    <p class="hint">
      Promise 방식은 "2번 로그"가 먼저 찍히고 "3번(데이터 도착)"이 나중에 찍히는 순서 역전을 확인할
      수 있다.
    </p>
  </div>
</template>

<style scoped>
.hint {
  font-size: 0.85rem;
  color: #666;
}
</style>
