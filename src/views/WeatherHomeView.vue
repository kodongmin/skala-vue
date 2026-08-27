<script setup>
import { ref, computed, watch, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import BaseDashboardCard from '@/components/exercise/BaseDashboardCard.vue'
import SearchBar from '@/components/exercise/SearchBar.vue'
import WeatherCard from '@/components/exercise/WeatherCard.vue'
import { cityList } from '@/data/cityList.js'
import { fetchCurrentWeather } from '@/services/weatherApi.js'

const router = useRouter()

const weatherList = ref([])
const isLoading = ref(true)
const errorMessage = ref('')

const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭해 보세요.')

// 5개 도시의 실시간 날씨를 동시에 요청한다. (axios.all과 동일한 효과를 Promise.all로 구현)
const loadWeather = async () => {
  isLoading.value = true
  errorMessage.value = ''
  try {
    weatherList.value = await Promise.all(cityList.map((city) => fetchCurrentWeather(city)))
  } catch (error) {
    errorMessage.value = `날씨 데이터를 불러오지 못했습니다. API 키 활성화 여부를 확인하세요. (${error.message})`
  } finally {
    isLoading.value = false
  }
}

onMounted(loadWeather)

const filteredWeatherList = computed(() => {
  const keyword = searchQuery.value.trim()
  if (!keyword) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(keyword))
})

const hotCityCount = computed(() => weatherList.value.filter((city) => city.temp >= 25).length)
const averageTemp = computed(() => {
  if (weatherList.value.length === 0) return 0
  const total = weatherList.value.reduce((sum, city) => sum + city.temp, 0)
  return (total / weatherList.value.length).toFixed(1)
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
  ElMessage.success(`${cityName} 카드를 선택했습니다.`)
}

// window.alert() 대신 Programmatic Navigation으로 상세 페이지로 이동한다.
const handleClickDetail = (city) => {
  router.push('/weather/' + city.id)
}
</script>

<template>
  <div class="practice-section weather-app">
    <h2>Weather App</h2>

    <el-alert
      v-if="isLoading"
      title="실시간 날씨 데이터를 불러오는 중입니다... ⏳"
      type="info"
      :closable="false"
    />
    <el-alert v-else-if="errorMessage" :title="errorMessage" type="error" :closable="false" />

    <template v-else>
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
    </template>
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
