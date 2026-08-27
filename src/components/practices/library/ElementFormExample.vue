<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const userForm = ref({
  email: '',
  agree: false,
})

const handleRegister = () => {
  if (!userForm.value.email.includes('@')) {
    ElMessage.error('❌ 올바른 이메일 형식이 아닙니다.')
    return
  }
  if (!userForm.value.agree) {
    ElMessage.warning('⚠️ 이용약관에 동의하셔야 합니다.')
    return
  }
  ElMessage.success('🎉 가입 신청이 정상적으로 완료되었습니다!')
}
</script>

<template>
  <div class="practice-section">
    <h2>Element Plus - 회원가입 폼</h2>
    <el-card class="box-card">
      <template #header>
        <span>간단 가입 폼</span>
      </template>
      <el-input
        v-model="userForm.email"
        placeholder="이메일 주소를 입력하세요"
        style="margin-bottom: 12px"
      />
      <div class="switch-row">
        <span>이용약관에 동의합니다</span>
        <el-switch v-model="userForm.agree" />
      </div>
      <el-button type="primary" @click="handleRegister" style="margin-top: 12px"
        >가입하기</el-button
      >
    </el-card>
  </div>
</template>

<style scoped>
.box-card {
  max-width: 360px;
}
.switch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
