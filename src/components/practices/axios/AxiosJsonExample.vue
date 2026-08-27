<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// JSONPlaceholder: 프론트엔드 개발자들이 통신/CRUD 코드를 테스트할 때 쓰는 무료 가상 REST API
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const items = ref([]) // 서버에서 받아온 데이터 배열
const textInput = ref('') // 새 글 작성용 입력값
const statusMessage = ref('')

// [READ] GET : 데이터 가져오기 (공부용으로 3개만)
const handleRead = async () => {
  try {
    const response = await axios.get(BASE_URL, { params: { _limit: 3 } })
    items.value = response.data
    statusMessage.value = `GET 성공: ${response.data.length}건 조회`
  } catch (error) {
    statusMessage.value = `GET 실패: ${error.message}`
  }
}

// [CREATE] POST : 새 데이터 등록
const handleCreate = async () => {
  if (!textInput.value.trim()) return
  try {
    const response = await axios.post(BASE_URL, { title: textInput.value, userId: 1 })
    // JSONPlaceholder는 실제로 저장하진 않지만, 등록된 것처럼 id가 붙은 객체를 돌려준다.
    items.value = [response.data, ...items.value]
    statusMessage.value = `POST 성공: id=${response.data.id} 생성됨`
    textInput.value = ''
  } catch (error) {
    statusMessage.value = `POST 실패: ${error.message}`
  }
}

// [UPDATE] PUT : 기존 데이터 수정 (첫 번째 항목의 제목을 수정하는 데모)
const handleUpdate = async (item) => {
  try {
    const response = await axios.put(`${BASE_URL}/${item.id}`, {
      ...item,
      title: item.title + ' (수정됨)',
    })
    items.value = items.value.map((i) => (i.id === item.id ? response.data : i))
    statusMessage.value = `PUT 성공: id=${item.id} 수정됨`
  } catch (error) {
    statusMessage.value = `PUT 실패: ${error.message}`
  }
}

// [DELETE] DELETE : 데이터 삭제
const handleDelete = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`)
    items.value = items.value.filter((i) => i.id !== id)
    statusMessage.value = `DELETE 성공: id=${id} 삭제됨`
  } catch (error) {
    statusMessage.value = `DELETE 실패: ${error.message}`
  }
}

onMounted(handleRead)
</script>

<template>
  <div class="practice-section">
    <h2>Axios로 REST API CRUD 다루기 (JSONPlaceholder)</h2>
    <p class="status">{{ statusMessage }}</p>

    <div class="create-box">
      <input v-model="textInput" type="text" placeholder="새 글 제목" @keyup.enter="handleCreate" />
      <button @click="handleCreate">등록 (POST)</button>
      <button @click="handleRead">새로고침 (GET)</button>
    </div>

    <ul>
      <li v-for="item in items" :key="item.id">
        [{{ item.id }}] {{ item.title }}
        <button @click="handleUpdate(item)">수정 (PUT)</button>
        <button @click="handleDelete(item.id)">삭제 (DELETE)</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.status {
  font-size: 0.85rem;
  color: #666;
}
.create-box {
  margin-bottom: 12px;
}
li {
  margin-bottom: 6px;
}
</style>
