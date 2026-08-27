<script setup>
import ProvideInjectGrandChild from './ProvideInjectGrandChild.vue'
// 이 컴포넌트는 globalTheme 데이터를 사용하지 않지만, 손자 컴포넌트까지 전달하는 통로 역할만 한다.
// Props Drilling이었다면 이 컴포넌트도 props를 받아서 그대로 넘겨줘야 했을 것이다.
</script>

<template>
  <div class="middle-child">
    <p>중간 자식 컴포넌트 (globalTheme을 모르고, props도 받지 않는다)</p>
    <ProvideInjectGrandChild />
  </div>
</template>

<style scoped>
.middle-child {
  border: 1px dashed #999;
  padding: 10px;
  margin: 8px 0;
}
</style>
