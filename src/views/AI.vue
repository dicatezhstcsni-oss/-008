<template>
  <section class="migration-placeholder">
    <h1>脐宝AI</h1>
    <p>点击下方按钮，进入 Coze 智能体对话。</p>

    <button class="ai-btn" @click="openCoze">
      打开脐宝AI
    </button>

    <RouterLink to="/">返回首页原型</RouterLink>
  </section>
</template>

<script setup>
function openCoze() {
  if (window.cozeWebSDK?.showChatBot) {
    window.cozeWebSDK.showChatBot()
  } else if (window.cozeWebSDK?.open) {
    window.cozeWebSDK.open()
  } else if (window.cozeWebSDK?.show) {
    window.cozeWebSDK.show()
  } else {
    alert('脐宝AI正在加载，请稍后再试')
  }
}
</script>

<style scoped>
.migration-placeholder {
  max-width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 28px 18px;
  background: #FFF8F9;
  color: #333;
}

h1 {
  font-size: 22px;
  margin-bottom: 12px;
}

p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 18px;
}

.ai-btn {
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 24px;
  background: linear-gradient(135deg, #FF8E9D, #FFB4BC);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 18px;
  cursor: pointer;
}

a {
  color: #FF8E9D;
  font-weight: 700;
}
</style>