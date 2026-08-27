<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const downloadProgress = ref(0)
const isDownloading = ref(false)

const confirmDelete = () => {
  ElMessageBox.confirm('서버에서 해당 파일을 영구히 삭제하시겠습니까?', '🔥 최종 경고', {
    confirmButtonText: '네, 삭제합니다',
    cancelButtonText: '취소',
    type: 'warning',
  })
    .then(() => {
      ElMessage.success('🗑️ 파일이 안전하게 삭제되었습니다.')
    })
    .catch(() => {
      ElMessage.info('❌ 삭제 작업이 취소되었습니다.')
    })
}

const startDownload = () => {
  if (isDownloading.value) return
  isDownloading.value = true
  downloadProgress.value = 0
  const interval = setInterval(() => {
    downloadProgress.value += 20
    if (downloadProgress.value >= 100) {
      clearInterval(interval)
      isDownloading.value = false
      ElMessage.success('💾 대용량 데이터 로드가 완료되었습니다!')
    }
  }, 400)
}
</script>

<template>
  <div class="practice-section">
    <h2>Element Plus - 삭제 확인 / 진행률</h2>
    <el-card class="box-card">
      <template #header>
        <span>파일 관리</span>
      </template>
      <el-button type="danger" @click="confirmDelete">삭제 테스트 버튼</el-button>
      <el-button type="primary" @click="startDownload" :disabled="isDownloading"
        >동기화 시작 버튼</el-button
      >
      <el-progress :percentage="downloadProgress" style="margin-top: 12px" />
    </el-card>
  </div>
</template>

<style scoped>
.box-card {
  max-width: 360px;
}
</style>
