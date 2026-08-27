<script setup>
import { ref, computed, watch, watchEffect } from 'vue'

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '제주', temp: 29, status: '맑음' },
  { id: 'city_05', name: '강릉', temp: 22, status: '흐림' },
])

// :value / @input 으로 직접 구현한 양방향 바인딩 (한글 IME 입력 확인용)
const searchQuery = ref('')
const handleQueryInput = (e) => {
  searchQuery.value = e.target.value
}

const selectedCityInfo = ref('카드를 클릭해 보세요.')
const selectCard = (cityName) => {
  selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.`
}

// 상세보기 버튼은 카드 클릭 이벤트와 분리되어야 하므로 @click.stop 으로 버블링을 막는다.
const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}

// computed: 검색어가 비어있으면 전체 목록, 있으면 이름에 검색어가 포함된 도시만 필터링한다.
const filteredWeatherList = computed(() => {
  const keyword = searchQuery.value.trim()
  if (!keyword) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(keyword))
})

// 추가 computed (본인 커스터마이징): 더운 도시 개수 / 평균 기온
const hotCityCount = computed(() => weatherList.value.filter((city) => city.temp >= 25).length)
const averageTemp = computed(() => {
  const total = weatherList.value.reduce((sum, city) => sum + city.temp, 0)
  return (total / weatherList.value.length).toFixed(1)
})

// watch: 상태바 문구가 바뀔 때마다(=카드를 새로 선택할 때마다) 콘솔에 로그를 남긴다.
watch(selectedCityInfo, (newValue, oldValue) => {
  console.log(`🔎 [watch] 상태바 변경 감지: "${oldValue}" -> "${newValue}"`)
})

// watchEffect: 검색어(searchQuery)를 타이핑할 때마다 자동으로 추적되어 실행된다.
watchEffect(() => {
  console.log(`⌨️ [watchEffect] 현재 검색어: "${searchQuery.value}"`)
})
</script>

<template>
  <div class="practice-section weather-mockup">
    <h2>Weather Composition 실습</h2>

    <h3>1) 도시 이름 검색 (:value / @input + computed 필터링)</h3>
    <input
      type="text"
      :value="searchQuery"
      @input="handleQueryInput"
      placeholder="도시 이름을 한글로 입력해보세요"
    />
    <p>
      더운 도시(25도 이상): <strong>{{ hotCityCount }}개</strong> / 평균 기온:
      <strong>{{ averageTemp }}°C</strong>
    </p>

    <h3>2) 지역별 날씨 카드</h3>
    <p class="status-bar">📍 상태: {{ selectedCityInfo }}</p>

    <p v-if="searchQuery.trim() && filteredWeatherList.length === 0" class="empty-message">
      "{{ searchQuery }}"와(과) 일치하는 도시가 없습니다.
    </p>
    <div v-else class="card-grid">
      <div
        v-for="city in filteredWeatherList"
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

.empty-message {
  padding: 12px;
  color: #e17055;
  font-weight: bold;
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
