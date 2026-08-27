<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UnitToggler from '@/components/exercise/UnitToggler.vue'
</script>

<template>
  <header class="site-header">
    <h1>Skala-Vue</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/search">도시 검색</RouterLink>
      <RouterLink to="/practice">Vue Syntax 실습</RouterLink>
      <RouterLink to="/practice/composition">Composition API 실습</RouterLink>
      <RouterLink to="/practice/component">Components 실습</RouterLink>
      <RouterLink to="/practice/pinia">Pinia 실습</RouterLink>
      <RouterLink to="/practice/axios">Axios 실습</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <UnitToggler />
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.site-header {
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
}

nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
  flex-wrap: wrap;
}

nav a.router-link-exact-active {
  color: #42b883;
  font-weight: bold;
}
</style>
