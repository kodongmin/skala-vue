<script setup>
const welcomeMessage = 'Welcome to Skala-Vue'
</script>

<template>
  <div class="practice-section">
    <h2>{{ welcomeMessage }}</h2>
    <p>{{ welcomeMessage.toUpperCase() }}</p>
    <p>{{ '오늘의 랜덤 숫자: ' + Math.ceil(Math.random() * 100) }}</p>
  </div>
</template>
