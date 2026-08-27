<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import BaseDashboardCard from './BaseDashboardCard.vue'
import SearchBar from './SearchBar.vue'
import WeatherCard from './WeatherCard.vue'

// 1. 모든 반응형 데이터는 WeatherParent가 소유한다.
const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '제주', temp: 29, status: '맑음' },
  { id: 'city_05', name: '강릉', temp: 22, status: '흐림' },
])

const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭해 보세요.')

const filteredWeatherList = computed(() => {
  const keyword = searchQuery.value.trim()
  if (!keyword) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(keyword))
})

const hotCityCount = computed(() => weatherList.value.filter((city) => city.temp >= 25).length)
const averageTemp = computed(() => {
  const total = weatherList.value.reduce((sum, city) => sum + city.temp, 0)
  return (total / weatherList.value.length).toFixed(1)
})

watch(selectedCityInfo, (newValue, oldValue) => {
  console.log(`🔎 [watch] 상태바 변경 감지: "${oldValue}" -> "${newValue}"`)
})

watchEffect(() => {
  console.log(`⌨️ [watchEffect] 현재 검색어: "${searchQuery.value}"`)
})

// 2. 자식 컴포넌트가 쏘아 올린 이벤트를 받아 처리하는 핸들러
const handleUpdateQuery = (value) => {
  searchQuery.value = value
}

const handleSelectCard = (cityName) => {
  selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.`
}

const handleClickDetail = (city) => {
  window.alert(`${city.name}의 현재 날씨는 [${city.status}] 상태입니다.`)
}
</script>

<template>
  <div class="practice-section weather-app">
    <h2>Weather Component 실습 (컴포넌트 분리)</h2>

    <BaseDashboardCard title="도시 검색">
      <SearchBar :search-query="searchQuery" @update-query="handleUpdateQuery" />
      <p class="summary">
        더운 도시(25도 이상): <strong>{{ hotCityCount }}개</strong> / 평균 기온:
        <strong>{{ averageTemp }}°C</strong>
      </p>
    </BaseDashboardCard>

    <BaseDashboardCard title="지역별 날씨 현황">
      <p class="status-bar">📍 상태: {{ selectedCityInfo }}</p>

      <p v-if="searchQuery.trim() && filteredWeatherList.length === 0" class="empty-message">
        "{{ searchQuery }}"와(과) 일치하는 도시가 없습니다.
      </p>
      <div v-else class="card-grid">
        <WeatherCard
          v-for="city in filteredWeatherList"
          :key="city.id"
          :city="city"
          @select-card="handleSelectCard"
          @click-detail="handleClickDetail"
        />
      </div>
    </BaseDashboardCard>
  </div>
</template>

<style scoped>
.summary {
  font-size: 0.9rem;
  color: #555;
}

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
</style>
