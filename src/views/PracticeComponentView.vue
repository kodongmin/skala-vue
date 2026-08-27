<script setup>
import LifecycleExample from '@/components/practices/component/LifecycleExample.vue'
import PropsEmitsParent from '@/components/practices/component/PropsEmitsParent.vue'
import ProvideInjectGrandParent from '@/components/practices/component/ProvideInjectGrandParent.vue'
import SlotDefaultParent from '@/components/practices/component/SlotDefaultParent.vue'
import SlotNamedParent from '@/components/practices/component/SlotNamedParent.vue'
import SlotScopedParent from '@/components/practices/component/SlotScopedParent.vue'
</script>

<template>
  <div class="practice-page">
    <h1>5장. Vue Components 실습 모음</h1>
    <p class="lead">
      Lifecycle Hook, Props &amp; Emits, Provide/Inject, Slot(Default/Named/Scoped)까지 챕터 5
      예제입니다.
    </p>

    <LifecycleExample />
    <PropsEmitsParent />
    <ProvideInjectGrandParent />
    <SlotDefaultParent />
    <SlotNamedParent />
    <SlotScopedParent />
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
