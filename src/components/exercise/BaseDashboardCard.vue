<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <el-card class="dashboard-card" shadow="hover">
    <template v-if="title" #header>
      <span>{{ title }}</span>
    </template>
    <slot></slot>
  </el-card>
</template>

<style scoped>
.dashboard-card {
  margin-bottom: 16px;
}
</style>
