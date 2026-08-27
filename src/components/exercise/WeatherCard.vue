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
  <el-card class="weather-card" shadow="hover" @click="handleCardClick">
    <h4>{{ city.name }}</h4>
    <p>{{ configStore.convertTemp(city.temp) }}{{ configStore.unitSymbol }} / {{ city.status }}</p>
    <el-tag v-if="city.temp >= 25" type="danger">🔥 더움 (25도 이상, 섭씨 기준)</el-tag>
    <el-tag v-else type="primary">❄️ 선선함 (25도 미만, 섭씨 기준)</el-tag>
    <br />
    <el-button size="small" style="margin-top: 8px" @click.stop="handleDetailClick"
      >상세보기</el-button
    >
  </el-card>
</template>

<style scoped>
.weather-card {
  cursor: pointer;
}
</style>
