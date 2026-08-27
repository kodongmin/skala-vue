<script setup>
import { useConfigStore } from '@/stores/configStore.js'

const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-card', 'click-detail'])

const configStore = useConfigStore()

const handleCardClick = () => {
  emit('select-card', props.city.name)
}

// 상세보기 버튼은 카드 클릭 이벤트와 분리되어야 하므로 @click.stop 으로 버블링을 막는다.
const handleDetailClick = () => {
  emit('click-detail', props.city)
}
</script>

<template>
  <div class="weather-card" @click="handleCardClick">
    <h4>{{ city.name }}</h4>
    <p>{{ configStore.convertTemp(city.temp) }}{{ configStore.unitSymbol }} / {{ city.status }}</p>
    <p v-if="city.temp >= 25" class="badge hot">🔥 더움 (25도 이상, 섭씨 기준)</p>
    <p v-else class="badge cool">❄️ 선선함 (25도 미만, 섭씨 기준)</p>
    <button @click.stop="handleDetailClick">상세보기</button>
  </div>
</template>

<style scoped>
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
