import { defineStore } from "pinia";


interface UserInfo {
  name: string,
  age: number,
  tel: string
}
const defaultState = ():UserInfo => {
  return {
    name: 'zy',
    age: 18,
    tel: '138'
  }
}
export const useUserInfoStore = defineStore(
  'userInfoStore',
  {
    state: (): UserInfo => {
      return defaultState()
    },
    getters:{
      getUserInfo(state){
        return state
      }
    },
    actions: {
      initStore(){
        this.$state = defaultState()
      },
      changeAge(age: number){
        this.age = age
      },
      changeTel(tel: string){
        this.tel = tel
      },
      changeName(name: string) {
        this.name = name
      }
    }
  }
)