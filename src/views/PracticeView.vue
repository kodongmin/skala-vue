<script setup>
import SampleOne from '@/components/practices/basic/SampleOne.vue'
import SampleTwo from '@/components/practices/basic/SampleTwo.vue'
import DirectiveHtmlText from '@/components/practices/basic/DirectiveHtmlText.vue'
import DirectiveBind from '@/components/practices/basic/DirectiveBind.vue'
import DirectiveConditional from '@/components/practices/basic/DirectiveConditional.vue'
import DirectiveFor from '@/components/practices/basic/DirectiveFor.vue'
import DirectiveMisc from '@/components/practices/basic/DirectiveMisc.vue'
import EventBasic from '@/components/practices/basic/EventBasic.vue'
import EventObject from '@/components/practices/basic/EventObject.vue'
import EventModifier from '@/components/practices/basic/EventModifier.vue'
import FormModel from '@/components/practices/basic/FormModel.vue'
import FormElements from '@/components/practices/basic/FormElements.vue'
import FormModifiers from '@/components/practices/basic/FormModifiers.vue'
import StyleScoped from '@/components/practices/basic/StyleScoped.vue'
</script>

<template>
  <div class="practice-page">
    <h1>3장. Vue Syntax 실습 모음</h1>
    <p class="lead">
      Dev Setup부터 Directive, Event Handling, Form Data Binding, Style까지 챕터 3에서 다룬 예제들을
      한 페이지에 모아 확인할 수 있도록 정리했습니다.
    </p>

    <SampleOne />
    <SampleTwo />
    <DirectiveHtmlText />
    <DirectiveBind />
    <DirectiveConditional />
    <DirectiveFor />
    <DirectiveMisc />
    <EventBasic />
    <EventObject />
    <EventModifier />
    <FormModel />
    <FormElements />
    <FormModifiers />
    <StyleScoped />
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
