<template>
  <div class="base-card">
    <slot>
      <p>기본 콘텐츠 영역입니다. (부모가 아무것도 넣지 않으면 이 문구가 보입니다)</p>
    </slot>
  </div>
</template>

<style scoped>
.base-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  margin: 8px 0;
}
</style>
