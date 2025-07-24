<template>
  <div v-if="isVisible" class="announcement-banner" :class="bannerClass" ref="banner">
    <slot>
      <p>
        {{ defaultMessage }}
      </p>
    </slot>
    <button class="close-button" @click="closeBanner">×</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'normal',
    validator: (value) => ['warning', 'emergency', 'normal'].includes(value),
  },
})

const isVisible = ref(true)
const banner = ref(null)

const bannerClass = computed(() => ({
  'warning': props.type === 'warning',
  'emergency': props.type === 'emergency',
  'normal': props.type === 'normal',
}))

const defaultMessage = computed(() => {
  switch (props.type) {
    case 'warning':
      return '⚠️ 警告：系统维护将于今晚进行，请保存您的工作！';
    case 'emergency':
      return '🚨 紧急通知：服务器故障，请立即联系管理员！';
    default:
      return '📢 公告：欢迎体验 VitePress！查看我们的 <a href="/guide">最新文档</a> 获取更多信息！';
  }
})

const updateNavMargin = () => {
  const nav = document.querySelector('.VPNav')
  if (nav && banner.value) {
    const bannerHeight = isVisible.value ? banner.value.offsetHeight : 0
    nav.style.marginTop = `${bannerHeight}px`
  }
}

const closeBanner = () => {
  isVisible.value = false
  updateNavMargin()
}

onMounted(() => {
  updateNavMargin()
  window.addEventListener('resize', updateNavMargin)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateNavMargin)
})
</script>

<style scoped>
.announcement-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  transition: all 0.3s ease;
}
.announcement-banner a {
  text-decoration: underline;
}
.close-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
.normal {
  background-color: #f0f9eb;
  color: #3c763d;
  border-bottom: 1px solid #d6e9c6;
}
.normal a {
  color: #2b5a27;
}
.normal .close-button {
  color: #3c763d;
}
.warning {
  background-color: #fdeded;
  color: #842029;
  border-bottom: 1px solid #f5c2c7;
}
.warning a {
  color: #64171d;
}
.warning .close-button {
  color: #842029;
}
.emergency {
  background-color: #fff4e5;
  color: #9a4d00;
  border-bottom: 1px solid #ffcc99;
}
.emergency a {
  color: #7a3d00;
}
.emergency .close-button {
  color: #9a4d00;
}
@media (max-width: 768px) {
  .announcement-banner {
    font-size: 12px;
    padding: 8px;
  }
}
</style>