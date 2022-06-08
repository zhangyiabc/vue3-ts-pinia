import { defineStore } from "pinia";

export interface List {
  id: string;
  time: string;
  title: string;
  status: "done" | "undo";
}

export const useTodoListStore = defineStore("todoList", {
  state: (): { lists: List[] } => {
    return {
      lists: [],
    };
  },

  getters:{
    listLength():number {
      return this.lists.length
    },

    doneListLength(): number {
      return this.getDoneList.length
    },

    unDoneListLength(): number {
      return this.getUndoList.length
    },

    getDoneList(): List[]{
      const result = this.lists.filter((item) => {
        return item.status === 'done'
      })
      return result
    },

    getUndoList(): List[] {
      const result = this.lists.filter((item) => {
        return item.status === 'undo'
      })
      return result
    }
  },

  actions: {
    addListItem(item: List){
      this.lists = [...this.lists, item]
    },

    changeItemStatus(item: List, status: "done" | "undo"){
      for (const listItem of this.lists) {
        if( listItem.id === item.id ){
          listItem.status = status
        }
      }
    },

  }
});
