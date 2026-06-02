<template>
  <div ref="legacyRoot" class="legacy-root"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import legacyHtml from '../legacy/body.html?raw'
import scriptManifest from '../legacy/scripts.json'

const legacyRoot = ref(null)

function loadScript(item) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    if (item.attrs?.includes('type="module"') || item.attrs?.includes("type='module'")) {
      s.type = 'module'
    }
    if (item.type === 'external') {
      s.src = item.src
      s.onload = resolve
      s.onerror = () => {
        console.warn('外部脚本加载失败：', item.src)
        resolve()
      }
    } else {
      fetch(item.path)
        .then(r => r.text())
        .then(code => {
          s.textContent = code
          resolve()
        })
        .catch(err => {
          console.warn('本地脚本加载失败：', item.path, err)
          resolve()
        })
    }
    document.body.appendChild(s)
    if (item.type !== 'external') {
      setTimeout(resolve, 0)
    }
  })
}

onMounted(async () => {
  legacyRoot.value.innerHTML = legacyHtml
  for (const item of scriptManifest) {
    await loadScript(item)
  }
  document.dispatchEvent(new Event('DOMContentLoaded'))
})
</script>
