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

    <el-alert
      v-if="isLoading"
      title="실시간 날씨 데이터를 불러오는 중입니다... ⏳"
      type="info"
      :closable="false"
    />

    <el-alert
      v-else-if="cityNotFound"
      :title="`&quot;${route.params.cityId}&quot; 에 해당하는 도시 정보를 찾을 수 없습니다.`"
      type="warning"
      :closable="false"
    />

    <el-alert v-else-if="errorMessage" :title="errorMessage" type="error" :closable="false" />

    <el-card v-else-if="selectedCity" class="detail-card" shadow="never">
      <template #header>
        <span>{{ selectedCity.name }} ({{ selectedCity.id }})</span>
      </template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="현재 기온">
          {{ configStore.convertTemp(selectedCity.temp) }}{{ configStore.unitSymbol }}
          <span class="raw-temp">(섭씨 원본: {{ selectedCity.temp }}°C)</span>
        </el-descriptions-item>
        <el-descriptions-item label="날씨 상태">{{ selectedCity.status }}</el-descriptions-item>
        <el-descriptions-item label="습도">{{ selectedCity.humidity }}%</el-descriptions-item>
        <el-descriptions-item label="풍속">{{ selectedCity.windSpeed }} m/s</el-descriptions-item>
      </el-descriptions>
    </el-card>

    <div class="nav-buttons">
      <el-button @click="goBack">이전 화면으로</el-button>
      <RouterLink to="/"><el-button type="primary">메인 대시보드로 돌아가기</el-button></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.detail-card {
  margin-bottom: 16px;
}

.raw-temp {
  color: #999;
  font-size: 0.85rem;
}

.nav-buttons {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}
</style>
