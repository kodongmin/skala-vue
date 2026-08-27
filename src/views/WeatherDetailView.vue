<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { findCityById } from '@/data/mockWeather.js'

const route = useRoute()
const router = useRouter()

const selectedCity = ref(null)

// 동적 경로 파라미터(:cityId)를 기반으로 Mount 시점에 Mock Data에서 도시 객체를 선택한다.
onMounted(() => {
  selectedCity.value = findCityById(route.params.cityId)
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="practice-section detail-view">
    <h2>지역별 상세 기상관측 정보</h2>

    <div v-if="selectedCity" class="detail-card">
      <h3>{{ selectedCity.name }} ({{ selectedCity.id }})</h3>
      <ul>
        <li>
          현재 기온: <strong>{{ selectedCity.temp }}°C</strong>
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
    <div v-else class="not-found">
      <p>"{{ route.params.cityId }}" 에 해당하는 도시 정보를 찾을 수 없습니다.</p>
    </div>

    <button @click="goBack">이전 화면으로</button>
    <RouterLink to="/">메인 대시보드로 돌아가기</RouterLink>
  </div>
</template>

<style scoped>
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

.not-found {
  color: #e17055;
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
