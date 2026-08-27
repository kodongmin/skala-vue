<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import BaseDashboardCard from '@/components/exercise/BaseDashboardCard.vue'
import SearchBar from '@/components/exercise/SearchBar.vue'
import WeatherCard from '@/components/exercise/WeatherCard.vue'
import { weatherList } from '@/data/mockWeather.js'

const router = useRouter()

const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭해 보세요.')

const filteredWeatherList = computed(() => {
  const keyword = searchQuery.value.trim()
  if (!keyword) return weatherList
  return weatherList.filter((city) => city.name.includes(keyword))
})

const hotCityCount = computed(() => weatherList.filter((city) => city.temp >= 25).length)
const averageTemp = computed(() => {
  const total = weatherList.reduce((sum, city) => sum + city.temp, 0)
  return (total / weatherList.length).toFixed(1)
})

watch(selectedCityInfo, (newValue, oldValue) => {
  console.log(`🔎 [watch] 상태바 변경 감지: "${oldValue}" -> "${newValue}"`)
})

watchEffect(() => {
  console.log(`⌨️ [watchEffect] 현재 검색어: "${searchQuery.value}"`)
})

const handleUpdateQuery = (value) => {
  searchQuery.value = value
}

const handleSelectCard = (cityName) => {
  selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.`
}

// window.alert() 대신 Programmatic Navigation으로 상세 페이지로 이동한다.
const handleClickDetail = (city) => {
  router.push('/weather/' + city.id)
}
</script>

<template>
  <div class="practice-section weather-app">
    <h2>Weather App</h2>

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
