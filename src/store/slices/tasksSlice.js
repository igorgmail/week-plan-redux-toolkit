import { createSlice } from "@reduxjs/toolkit";
import initState from "../lib/initStateAllTasks.js";

const tasksSlice = createSlice({
  name: 'tasks',

  initialState: initState,

  reducers: {
    addTask: (state, action) => {
      const newTask = {
        task: action.payload.textTask,
        status: 'work',
        dataEnd: Date.now()
      }
      console.log("▶ ⇛ action:", action);
      state[action.payload.pageNum].unshift(newTask)
    },
    toggleStatus: (state, action) => {
      const { pageNum, dataItem } = action.payload;
      state[pageNum] = state[pageNum].map((el, ind) => {
        if (ind === Number(dataItem)) {
          return {
            ...el,
            status: el.status === 'done' ? 'work' : 'done'
          };
        }
        return el;
      });
    },
    sortByDone: (state, action) => {
      state[action.payload].sort((a, b) => {
        if (a.status === 'done' && b.status !== 'done') {
          return 1; // a должно идти после b
        }
        if (a.status !== 'done' && b.status === 'done') {
          return -1; // a должно идти перед b
        }
        return 0; // порядок a и b остается неизменным
      })
    },
    updateTask: (state, action) => {
      const { pageNum, itemIndex, textValue } = action.payload;
      state[pageNum][itemIndex].task = textValue
    },
    deleteTask: (state, action) => {
      const { pageNum, index } = action.payload;
      state[pageNum] = state[pageNum].filter((el, ind) => ind !== Number(index))
    },
    checkAllDone: (state, action) => {
      const { pageNum, status } = action.payload
      state[pageNum].map((el) => {
        el.status = status ? 'done' : 'work'
      })
    },
    removeAllFromOneTab: (state, action) => {
      const { pageNum, menu } = action.payload
      if (menu === 'done') {
        state[pageNum] = state[pageNum].filter((el) => el.status !== 'done')
      }
      if (menu === 'work') {
        state[pageNum] = state[pageNum].filter((el) => el.status !== 'work')
      }
      if (menu === 'all') {
        state[pageNum] = []
      }
    }


  }
})

export default tasksSlice.reducer
export const { addTask, toggleStatus, sortByDone,
  updateTask, deleteTask, checkAllDone, removeAllFromOneTab } = tasksSlice.actions