import { defineStore } from 'pinia'

export const useInfoStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0,
      name: 'zy',
      isAdmin: true
    }
  },
  getters: {
    nameLength: (state) => state.name.length,
    doubleCount(): number {
      return this.counter * 2
    }
  },
  actions: {
    increment(){
      this.counter ++
    }
  }
})
