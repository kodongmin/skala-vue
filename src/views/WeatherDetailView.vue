<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { findCityById } from '@/data/cityList.js'
import { fetchCurrentWeather } from '@/services/weatherApi.js'
import { useConfigStore } from '@/stores/configStore.js'

const route = useRoute()
const router = useRouter()
const configStore = useConfigStore()

const selectedCity = ref(null)
const isLoading = ref(true)
const errorMessage = ref('')
const cityNotFound = ref(false)

// 동적 경로 파라미터(:cityId)를 기반으로 Mount 시점에 좌표를 찾고, 실시간 날씨를 요청한다.
onMounted(async () => {
  const cityInfo = findCityById(route.params.cityId)
  if (!cityInfo) {
    cityNotFound.value = true
    isLoading.value = false
    return
  }

  try {
    selectedCity.value = await fetchCurrentWeather(cityInfo)
  } catch (error) {
    errorMessage.value = `날씨 데이터를 불러오지 못했습니다. (${error.message})`
  } finally {
    isLoading.value = false
  }
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="practice-section detail-view">
    <h2>지역별 상세 기상관측 정보</h2>

    <p v-if="isLoading" class="loading">실시간 날씨 데이터를 불러오는 중입니다... ⏳</p>

    <div v-else-if="cityNotFound" class="not-found">
      <p>"{{ route.params.cityId }}" 에 해당하는 도시 정보를 찾을 수 없습니다.</p>
    </div>

    <p v-else-if="errorMessage" class="error">{{ errorMessage }}</p>

    <div v-else-if="selectedCity" class="detail-card">
      <h3>{{ selectedCity.name }} ({{ selectedCity.id }})</h3>
      <ul>
        <li>
          현재 기온:
          <strong
            >{{ configStore.convertTemp(selectedCity.temp) }}{{ configStore.unitSymbol }}</strong
          >
          (섭씨 원본: {{ selectedCity.temp }}°C)
        </li>
        <li>
          날씨 상태: <strong>{{ selectedCity.status }}</strong>
        </li>
        <li>
          습도: <strong>{{ selectedCity.humidity }}%</strong>
        </li>
        <li>
          풍속: <strong>{{ selectedCity.windSpeed }} m/s</strong>
        </li>
      </ul>
    </div>

    <button @click="goBack">이전 화면으로</button>
    <RouterLink to="/">메인 대시보드로 돌아가기</RouterLink>
  </div>
</template>

<style scoped>
.loading {
  padding: 12px;
  color: #666;
}

.detail-card {
  background-color: #eef7f2;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.detail-card ul {
  list-style: none;
  padding: 0;
}

.detail-card li {
  padding: 4px 0;
}

.not-found,
.error {
  color: #e17055;
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
