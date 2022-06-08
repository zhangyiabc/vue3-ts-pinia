import { delay } from "@/utils/delay";
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  'counterStore',
  {
    state: () => {
      return {
        count: 0
      }
    },
    getters: {
      doubleCount(): number{
        return this.count * 2
      }
    },
    actions: {
      async asyncIncrement(){
        await delay()
        this.count ++
      },
      increment(){
        this.count ++
      }
    }
  }
)