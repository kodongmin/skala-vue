<script setup>
import { ref } from 'vue'

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '제주', temp: 29, status: '맑음' },
  { id: 'city_05', name: '강릉', temp: 22, status: '흐림' },
])

// :value / @input 으로 직접 구현한 양방향 바인딩 (한글 IME 입력 확인용)
const cityQuery = ref('')
const handleQueryInput = (e) => {
  cityQuery.value = e.target.value
}

const selectedCityInfo = ref('카드를 클릭해 보세요.')
const selectCard = (cityName) => {
  selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.`
}

// 상세보기 버튼은 카드 클릭 이벤트와 분리되어야 하므로 @click.stop 으로 버블링을 막는다.
const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="practice-section weather-mockup">
    <h2>Weather Mockup 실습</h2>

    <h3>1) 도시 이름 검색 (:value / @input)</h3>
    <input
      type="text"
      :value="cityQuery"
      @input="handleQueryInput"
      placeholder="도시 이름을 한글로 입력해보세요"
    />
    <p>
      입력한 도시명: <strong>{{ cityQuery || '(입력 없음)' }}</strong>
    </p>

    <h3>2) 지역별 날씨 카드 (v-for / v-if)</h3>
    <p class="status-bar">📍 상태: {{ selectedCityInfo }}</p>
    <div class="card-grid">
      <div
        v-for="city in weatherList"
        :key="city.id"
        class="weather-card"
        @click="selectCard(city.name)"
      >
        <h4>{{ city.name }}</h4>
        <p>{{ city.temp }}°C / {{ city.status }}</p>
        <p v-if="city.temp >= 25" class="badge hot">🔥 더움 (25도 이상)</p>
        <p v-else class="badge cool">❄️ 선선함 (25도 미만)</p>
        <button @click.stop="showDetail(city.name, city.status)">상세보기</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-bar {
  font-weight: bold;
  padding: 8px;
  background-color: #eef7f2;
  border-radius: 6px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.weather-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
  background-color: white;
}

.weather-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
}

.badge {
  font-size: 0.85rem;
  font-weight: bold;
}

.badge.hot {
  color: #e17055;
}

.badge.cool {
  color: #0984e3;
}
</style>
