<script setup>
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@/stores/configStore.js'

const configStore = useConfigStore()
const { unit, unitSymbol, isDarkMode, themeLabel } = storeToRefs(configStore)
</script>

<template>
  <div class="unit-toggler">
    <el-tag type="info">{{ unit === 'celsius' ? '섭씨' : '화씨' }} ({{ unitSymbol }})</el-tag>
    <el-switch
      :model-value="unit === 'fahrenheit'"
      inline-prompt
      active-text="℉"
      inactive-text="℃"
      @change="configStore.toggleUnit"
    />
    <el-button size="small" @click="configStore.toggleDarkMode"
      >{{ themeLabel }} (표시용)</el-button
    >
    <span v-if="isDarkMode">🌙</span>
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
</style>
