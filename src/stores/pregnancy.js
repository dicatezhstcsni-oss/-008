import { defineStore } from 'pinia'

export const usePregnancyStore = defineStore('pregnancy', {
  state: () => ({
    currentWeek: 12,
    cycleLength: 28,
    lastPeriodDate: ''
  }),
  actions: {
    setCurrentWeek(week) { this.currentWeek = Number(week) || this.currentWeek },
    setCycleInfo({ cycleLength, lastPeriodDate }) {
      this.cycleLength = Number(cycleLength) || this.cycleLength
      this.lastPeriodDate = lastPeriodDate || this.lastPeriodDate
    }
  }
})
