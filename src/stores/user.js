import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    nickname: '准妈妈',
    stage: 'pregnancy'
  }),
  actions: {
    updateProfile(profile) { Object.assign(this, profile) }
  }
})
