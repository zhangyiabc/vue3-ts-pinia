<script setup lang="ts">
  import { defineProps } from 'vue'
  import { List, useTodoListStore } from '@/store/modules/todoList'
  import moment from 'moment'
  const todoListStore = useTodoListStore()
  const { changeItemStatus } = todoListStore
  const props= defineProps({
    info: {
      type: Object as () => List,
      required: true
    },
    
  })
  
  const handleClick = () => {
    if (props.info.status === 'undo'){
      changeItemStatus(props.info, 'done')
    } else {
      changeItemStatus(props.info, 'undo')
    }
  }

  const formatTime = (time: string) :string =>  {
    console.log(time)
    const res = moment(+time).format('YYYY年MM月DD日 HH:mm:ss')
    return res
  }
</script>
<template>
  <div class="card">
    <div class="content">
      <input type="checkbox" name="" id="" :checked="props.info.status === 'done'" @click="handleClick">
      <s v-if="props.info.status === 'done'" class="text">
        {{props.info.title}}
        <span class="time">{{ formatTime(props.info.time) }}</span>
      </s>
      <p v-else class="text">
        {{props.info.title}}
        <span class="time">{{ formatTime(props.info.time) }}</span>
      </p>

    </div>
  </div>
</template>



<style scoped lang="scss">
  .card{
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    border-bottom: 1px solid #999;
    height: 50px;
    .content {
      display: flex;
      font-size: 15px;
      height: 100%;
      align-items: center;
      .text{
        flex: 1 1 auto;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>