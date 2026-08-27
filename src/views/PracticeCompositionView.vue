<script setup>
import RefExample from '@/components/practices/composition/RefExample.vue'
import ReactiveExample from '@/components/practices/composition/ReactiveExample.vue'
import ComputedExample from '@/components/practices/composition/ComputedExample.vue'
import WatchExample from '@/components/practices/composition/WatchExample.vue'
import WatchMultiExample from '@/components/practices/composition/WatchMultiExample.vue'
import WatchDeepExample from '@/components/practices/composition/WatchDeepExample.vue'
import WatchReactiveExample from '@/components/practices/composition/WatchReactiveExample.vue'
import WatchEffectExample from '@/components/practices/composition/WatchEffectExample.vue'
</script>

<template>
  <div class="practice-page">
    <h1>4장. Composition API 실습 모음</h1>
    <p class="lead">
      ref / reactive 반응형 상태부터 computed, watch, watchEffect까지 챕터 4에서 다룬 예제들입니다.
    </p>

    <RefExample />
    <ReactiveExample />
    <ComputedExample />
    <WatchExample />
    <WatchMultiExample />
    <WatchDeepExample />
    <WatchReactiveExample />
    <WatchEffectExample />
  </div>
</template>

<style scoped>
.practice-page {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px;
}
.lead {
  color: #666;
  margin-bottom: 24px;
}
</style>
