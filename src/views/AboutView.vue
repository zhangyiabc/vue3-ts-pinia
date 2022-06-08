<script lang="ts" setup>
import { storeToRefs } from "pinia";
import DemoViewVue from "./DemoView.vue";
import { useCounterStore } from "@/store/modules/counter";
import { useUserInfoStore } from "@/store/modules/userInfo";
const counterStore = useCounterStore();
const userInfoStore = useUserInfoStore();
const { count, doubleCount } = storeToRefs(counterStore);
const { name, age, tel, getUserInfo } = storeToRefs(userInfoStore);
const { changeAge, changeTel, changeName, initStore } = userInfoStore;

const handleBtnClick = (e:any) => {
  // console.log(name);
  // console.log('17',e);

  console.log(getUserInfo);
};
const handleAgeChange = (e:any) => {
  console.log(e)
  changeName(e.target.value)
};

const handleChange = (e:any) => {
  console.log(e.target.value);
  changeName(e.target.value)
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <DemoViewVue :name="'d'" adress="sda" />

    <hr />
    <p>名字{{ name }}</p>
    <p>
      输入名字： <input type="text" :value="name"  @change="handleChange" />
      <button @click="handleBtnClick">改变store中的name</button>
    </p>

    <p>
      输出用户年龄：<input type="number" name="" id="" :value="age" @change="handleAgeChange" />
      <button @click="handleAgeChange">改变store中的age</button>
    </p>
    <p>
      <button @click="() => {
        initStore()
      }">重置store</button>
    </p>
  </div>
</template>
