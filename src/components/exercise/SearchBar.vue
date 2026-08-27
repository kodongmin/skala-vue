<script setup>
defineProps({
  searchQuery: {
    type: String,
    default: '',
  },
})

// 검색 시 도시명을 부모에게 전달하는 이벤트를 등록한다 (부모로부터 받은 데이터를 직접 수정하지 않는다).
const emit = defineEmits(['update-query'])

// el-input은 @input 이벤트에 DOM Event 대신 입력된 문자열 값을 직접 넘겨준다.
const handleInput = (value) => {
  emit('update-query', value)
}
</script>

<template>
  <div class="search-bar">
    <el-input
      :model-value="searchQuery"
      @input="handleInput"
      placeholder="도시 이름을 한글로 입력해보세요"
      clearable
    />
    <p>
      현재 검색어: <strong>{{ searchQuery || '(입력 없음)' }}</strong>
    </p>
  </div>
</template>
