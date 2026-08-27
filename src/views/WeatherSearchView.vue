<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { weatherList } from '@/data/mockWeather.js'

// Query String Routing 실습: /search?city=수원 형태의 주소를 그대로 지원한다.
const route = useRoute()
const router = useRouter()

const keyword = ref(route.query.city ?? '')

const matchedCities = computed(() => {
  const target = String(route.query.city ?? '').trim()
  if (!target) return []
  return weatherList.filter((city) => city.name.includes(target))
})

const handleSearch = () => {
  // 주소창의 쿼리스트링을 직접 갱신하여, 새로고침해도 검색 상태가 유지되도록 한다.
  router.push({ path: '/search', query: keyword.value ? { city: keyword.value } : {} })
}
</script>

<template>
  <div class="practice-section search-view">
    <h2>도시별 날씨 검색 (Query String Routing)</h2>
    <p class="hint">
      주소창에 <code>/search?city=수원</code> 처럼 직접 입력해도 동일하게 동작한다.
    </p>

    <input
      v-model="keyword"
      type="text"
      placeholder="도시 이름을 입력하세요"
      @keyup.enter="handleSearch"
    />
    <button @click="handleSearch">검색</button>

    <p>
      현재 쿼리스트링: <code>{{ route.fullPath }}</code>
    </p>

    <ul v-if="matchedCities.length > 0">
      <li v-for="city in matchedCities" :key="city.id">
        {{ city.name }} - {{ city.temp }}°C / {{ city.status }}
      </li>
    </ul>
    <p v-else-if="route.query.city">"{{ route.query.city }}"와(과) 일치하는 도시가 없습니다.</p>
  </div>
</template>

<style scoped>
.hint {
  font-size: 0.85rem;
  color: #666;
}
</style>
