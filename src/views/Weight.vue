<template>
  <section class="weight-page">
    <header class="page-header">
      <RouterLink to="/" class="back">‹</RouterLink>
      <h1>体重记录</h1>
    </header>

    <div class="summary-card">
      <div>
        <p class="label">当前体重</p>
        <strong>{{ currentWeight }} kg</strong>
      </div>
      <div>
        <p class="label">建议范围</p>
        <strong>{{ currentRange.min }}-{{ currentRange.max }} kg</strong>
      </div>
      <div>
        <p class="label">当前状态</p>
        <strong :class="statusClass">{{ statusText }}</strong>
      </div>
    </div>

    <div class="chart-card">
      <div class="chart-title">
        <h2>体重趋势</h2>
        <div class="legend">
          <span class="actual"></span>实际
          <span class="range"></span>建议范围
          <span class="median"></span>中位数
        </div>
      </div>

      <div class="chart-wrap">
        <svg :viewBox="`0 0 ${chartWidth} ${chartHeight}`">
          <line
            v-for="tick in yTicks"
            :key="tick"
            :x1="padding.left"
            :x2="chartWidth - padding.right"
            :y1="getY(tick)"
            :y2="getY(tick)"
            class="grid-line"
          />

          <text
            v-for="tick in yTicks"
            :key="'label-' + tick"
            :x="padding.left - 10"
            :y="getY(tick) + 4"
            text-anchor="end"
            class="axis-label"
          >
            {{ tick }}
          </text>

          <polygon :points="rangeAreaPoints" class="range-area" />

          <polyline :points="medianLinePoints" class="median-line" />

          <polyline :points="actualLinePoints" class="actual-line" />

          <circle
            v-for="item in actualData"
            :key="'point-' + item.week"
            :cx="getX(item.week)"
            :cy="getY(item.weight)"
            r="5"
            class="actual-point"
          />

          <text
            v-for="week in weeks"
            :key="'x-' + week"
            :x="getX(week)"
            :y="chartHeight - 10"
            text-anchor="middle"
            class="axis-label"
          >
            {{ week }}周
          </text>
        </svg>
      </div>
    </div>

    <div class="ai-card">
      <h3>脐酱AI分析</h3>
      <p>{{ aiAdvice }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const weeks = [0, 7, 14, 21, 28, 35]

const recommendData = [
  { week: 0, min: 60, max: 60, median: 60 },
  { week: 7, min: 61, max: 61.5, median: 61.2 },
  { week: 14, min: 63, max: 64.5, median: 63.8 },
  { week: 21, min: 66, max: 68, median: 67 },
  { week: 28, min: 69, max: 72, median: 70.5 },
  { week: 35, min: 72, max: 76, median: 74 }
]

const actualData = [
  { week: 0, weight: 60 },
  { week: 7, weight: 61.1 },
  { week: 14, weight: 63.5 },
  { week: 21, weight: 66.8 },
  { week: 24, weight: 68.2 }
]

const currentWeek = actualData[actualData.length - 1].week
const currentWeight = actualData[actualData.length - 1].weight

const chartWidth = 390
const chartHeight = 260
const padding = {
  top: 20,
  right: 20,
  bottom: 36,
  left: 42
}

const allWeights = [
  ...recommendData.map(i => i.min),
  ...recommendData.map(i => i.max),
  ...recommendData.map(i => i.median),
  ...actualData.map(i => i.weight)
]

const minY = computed(() => Math.floor(Math.min(...allWeights) - 2))
const maxY = computed(() => Math.ceil(Math.max(...allWeights) + 2))

const yTicks = computed(() => {
  const ticks = []
  for (let i = minY.value; i <= maxY.value; i += 2) {
    ticks.push(i)
  }
  return ticks
})

function getX(week) {
  const minWeek = 0
  const maxWeek = 35
  const width = chartWidth - padding.left - padding.right
  return padding.left + ((week - minWeek) / (maxWeek - minWeek)) * width
}

function getY(weight) {
  const height = chartHeight - padding.top - padding.bottom
  return padding.top + ((maxY.value - weight) / (maxY.value - minY.value)) * height
}

function pointsFromData(data, key) {
  return data.map(item => `${getX(item.week)},${getY(item[key])}`).join(' ')
}

const rangeAreaPoints = computed(() => {
  const top = recommendData.map(item => `${getX(item.week)},${getY(item.max)}`)
  const bottom = recommendData
    .slice()
    .reverse()
    .map(item => `${getX(item.week)},${getY(item.min)}`)
  return [...top, ...bottom].join(' ')
})

const medianLinePoints = computed(() => pointsFromData(recommendData, 'median'))
const actualLinePoints = computed(() =>
  actualData.map(item => `${getX(item.week)},${getY(item.weight)}`).join(' ')
)

const currentRange = computed(() => {
  const nearest = recommendData.reduce((prev, curr) => {
    return Math.abs(curr.week - currentWeek) < Math.abs(prev.week - currentWeek)
      ? curr
      : prev
  })
  return nearest
})

const statusText = computed(() => {
  if (currentWeight < currentRange.value.min) {
    return `偏低 ${(currentRange.value.min - currentWeight).toFixed(1)}kg`
  }
  if (currentWeight > currentRange.value.max) {
    return `偏高 ${(currentWeight - currentRange.value.max).toFixed(1)}kg`
  }
  return '正常'
})

const statusClass = computed(() => {
  if (currentWeight < currentRange.value.min) return 'low'
  if (currentWeight > currentRange.value.max) return 'high'
  return 'normal'
})

const aiAdvice = computed(() => {
  if (statusClass.value === 'low') {
    return '当前体重低于建议范围，建议关注每日蛋白质、奶制品和主食摄入，保持规律饮食，并持续记录体重变化。'
  }
  if (statusClass.value === 'high') {
    return '当前体重高于建议范围，建议适当控制高糖高油食物摄入，保持轻量运动，并咨询医生进行个体化管理。'
  }
  return '当前体重处于建议范围内，继续保持均衡饮食、规律作息和每周记录体重即可。'
})
</script>

<style scoped>
.weight-page {
  max-width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 18px 16px 40px;
  background: #fff8f9;
  color: #333;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.back {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #fff;
  color: #ff8e9d;
  text-align: center;
  line-height: 30px;
  font-size: 34px;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(255, 142, 157, 0.16);
}

h1 {
  font-size: 22px;
  margin: 0;
}

.summary-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background: #fff;
  border-radius: 22px;
  padding: 16px 12px;
  margin-bottom: 16px;
  box-shadow: 0 10px 28px rgba(255, 142, 157, 0.14);
}

.summary-card div {
  text-align: center;
}

.label {
  font-size: 12px;
  color: #999;
  margin: 0 0 6px;
}

.summary-card strong {
  font-size: 15px;
}

.low {
  color: #ff9800;
}

.normal {
  color: #23b26d;
}

.high {
  color: #ff5a5f;
}

.chart-card {
  background: #fff;
  border-radius: 24px;
  padding: 18px 14px;
  box-shadow: 0 10px 28px rgba(255, 142, 157, 0.14);
}

.chart-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.chart-title h2 {
  font-size: 18px;
  margin: 0;
}

.legend {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #999;
}

.legend span {
  display: inline-block;
  width: 16px;
  height: 4px;
  border-radius: 999px;
}

.legend .actual {
  background: #ff8e9d;
}

.legend .range {
  background: #bfeed5;
}

.legend .median {
  border-top: 2px dashed #75d49d;
  height: 0;
}

.chart-wrap {
  width: 100%;
  overflow: hidden;
}

svg {
  width: 100%;
  height: auto;
}

.grid-line {
  stroke: #f0f0f0;
  stroke-width: 1;
}

.axis-label {
  fill: #999;
  font-size: 12px;
}

.range-area {
  fill: rgba(129, 220, 168, 0.22);
  stroke: rgba(129, 220, 168, 0.55);
  stroke-width: 1.5;
}

.median-line {
  fill: none;
  stroke: #8fe0b0;
  stroke-width: 3;
  stroke-dasharray: 8 6;
  stroke-linecap: round;
}

.actual-line {
  fill: none;
  stroke: #ff8e9d;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.actual-point {
  fill: #ff8e9d;
  stroke: #fff;
  stroke-width: 3;
}

.ai-card {
  margin-top: 16px;
  background: #fff;
  border-radius: 22px;
  padding: 16px;
  box-shadow: 0 10px 28px rgba(255, 142, 157, 0.14);
}

.ai-card h3 {
  margin: 0 0 8px;
  font-size: 17px;
}

.ai-card p {
  margin: 0;
  color: #666;
  line-height: 1.7;
  font-size: 14px;
}
</style>