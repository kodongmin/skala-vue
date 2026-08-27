<script setup>
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@/stores/configStore.js'

const configStore = useConfigStore()
const { unit, unitSymbol, isDarkMode, themeLabel } = storeToRefs(configStore)
</script>

<template>
  <div class="unit-toggler">
    <button type="button" @click="configStore.toggleUnit">
      온도 단위: {{ unit === 'celsius' ? '섭씨' : '화씨' }} ({{ unitSymbol }})
    </button>
    <button type="button" @click="configStore.toggleDarkMode">{{ themeLabel }} (표시용)</button>
    <span v-if="isDarkMode" class="dark-badge">🌙</span>
  </div>
</template>

<style scoped>
.unit-toggler {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  font-size: 0.85rem;
}

.unit-toggler button {
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 999px;
  background-color: white;
  cursor: pointer;
}

.unit-toggler button:hover {
  background-color: #f0f0f0;
}
</style>
