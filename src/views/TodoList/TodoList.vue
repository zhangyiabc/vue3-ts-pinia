<script setup lang="ts">
  import { ref } from 'vue';
  import Card from './components/card.vue'
  import { useTodoListStore } from '@/store/modules/todoList'
  import { storeToRefs } from 'pinia'
  import {v4 as uuid}  from 'uuid'
  const todoListStore = useTodoListStore()
  const { lists, listLength, unDoneListLength, doneListLength, getDoneList, getUndoList } = storeToRefs(todoListStore)
  const { addListItem } = todoListStore
  const tabValues = ref<'all' | 'undo' | 'done'>('all')
  // console.log(tabValues)
  const titleRef = ref('')
  const handleTabChange = (tab: 'all' | 'undo' | 'done') => {
    tabValues.value = tab
  }
  const handleAdd = () => {
    addListItem({
      id: uuid(),
      title: titleRef.value,
      time: String(Date.now()),
      status: 'undo'
    })
    titleRef.value = ''
  }
</script>

<template>
  <div class="todoList">
    <div class="header">
      <div :class="`tab ${tabValues === 'all' ? 'active' :''}`" @click="handleTabChange('all')">全部 <span v-if="tabValues === 'all'">{{listLength}}条</span></div>
      <div :class="`tab ${tabValues === 'done' ? 'active' :''}`" @click="handleTabChange('done')">已办 <span v-if="tabValues === 'done'">{{doneListLength}}条</span></div>
      <div :class="`tab ${tabValues === 'undo' ? 'active' :''}`" @click="handleTabChange('undo')">待办 <span v-if="tabValues === 'undo'">{{unDoneListLength}}条</span></div>
    </div>
    <div class="add">
      <input type="text" placeholder="请输入新增的待办" v-model="titleRef">
      <button @click="handleAdd" class="addBtn">新增待办</button>
    </div>
    <div class="body">
      <template v-for="item in (tabValues === 'all' ? lists : tabValues === 'done' ? getDoneList :  getUndoList)" :key="item.id"> 
        <Card :info='item'/> 
      </template>
    </div>

    <div class="footer">
      共有 {{tabValues === 'all' ? lists.length : tabValues === 'done' ? getDoneList.length :  getUndoList.length}} 条数据
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
  .todoList{
    position: relative;
    margin: 0 auto;
    margin-top: 30px;
    width: 800px;
    height: 400px;
    border-radius: 4px;
    background-color: rgba(201, 197, 197, 0.2);
    .add{
      display: flex;
      justify-content: space-between;
      height: 40px;
      // margin-bottom: 20px;
      input{
        width: 70%;
      }
      button.addBtn {
        background-color: #00818c;
        border: none;
        outline: none;
        color: #fff;
        text-align: center;
        font-weight: 700;
        cursor: pointer;
        width: 150px
      }
    }
    .header{
      height: 50px;
      box-sizing: border-box;
      display: flex;
      border-bottom: 1px #999 solid;
      .tab {
        padding: 0px 25px;
        line-height: 50px;
        margin-right: 10px;
        cursor: pointer;
        color: #000;
        transition: 0.3s;
        // border: 1px solid #333;
        &:hover {
          color: #fff;
          background-color: #81acac;
        }
        &.active {
          color: #fff;
          background-color: #81acac;
        }
      }
    }
    .body{
      background-color: #fff;
    }
    .footer{
      position: absolute;
      bottom: 10px;
    }
  }
</style>