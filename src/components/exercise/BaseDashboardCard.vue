<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="dashboard-card">
    <h3 v-if="title">{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<style scoped>
.dashboard-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: white;
}

.dashboard-card h3 {
  margin-top: 0;
  color: #42b883;
}
</style>
