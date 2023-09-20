import { createSlice } from "@reduxjs/toolkit";
import { initStateAllTasks } from "../lib/initStateAllTasks.js";
import { v4 as uuidv4 } from 'uuid'

const tasksSlice = createSlice({
  name: 'tasks',

  initialState: initStateAllTasks,

  reducers: {
    addTask: (state, action) => {
      //TODO Добавить для Неделя
      const addTime = action.payload.pageNum === 3 ? (24 * 60 * 60 * 1000) : 0 

      const newTask = {
        task: action.payload.textTask,
        status: 'work',
        dataAdd: Date.now() + addTime,
        key: uuidv4()
      }
      console.log("ADDTASK---length", state[action.payload.pageNum].length);
      state[action.payload.pageNum].unshift(newTask)
    },

    toggleStatus: (state, action) => {
      const { pageNum, dataIKey } = action.payload;
      state[pageNum] = state[pageNum].map((el, ind) => {

        if (el.key === dataIKey) {
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
      const { pageNum, textValue, itemKey } = action.payload;
      state[pageNum].map((el) => {
        if (el.key === itemKey) {
          el.task = textValue
          return el
        }
        return el
      })
    },
    // updateTask: (state, action) => {
    //   const { pageNum, itemIndex, textValue } = action.payload;
    //   state[pageNum][itemIndex].task = textValue
    // },

    deleteTask: (state, action) => {
      const { pageNum, itemKey } = action.payload;
      state[pageNum] = state[pageNum].filter((el) => el.key !== itemKey)
    },

    deleteAllDoneTask: (state, action) => {
      const { pageNum, index } = action.payload;
      state[pageNum] = state[pageNum].filter((el, ind) => ind !== Number(index))
    },

    checkAllDone: (state, action) => {
      const { pageNum, status } = action.payload
      state[pageNum].map((el) => {
        el.status = status ? 'done' : 'work'
        return el
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
    },
    mvAllFromTodayToHistory: (state, action) => {
      console.log("IN mvAllFromTodayToHistory");
      state['2'].forEach((el) => {
        console.log("▶ ⇛ el:", el);
        state['1'].push(el)
      });
      state['2'] = []
    },
    mvAllFromTomorrowToHistory: (state, action) => {
      state['3'].forEach((el) => {
        state['2'].push(el)
      });
      state['3'] = []
    },
    mvAllFromTomorrowToToday: (state, action) => {
      state['3'].forEach((el) => {
        state['1'].push(el)
      });
      state['3'] = []
    },
    // sortAllInHistory: (state, action) => {
    //   state['1'].sort((a, b) => b.dataAdd - a.dataAdd)
    // },



  }
})

export default tasksSlice.reducer
export const { addTask, toggleStatus, sortByDone,
  updateTask, deleteTask, checkAllDone, removeAllFromOneTab,
  mvAllFromTodayToHistory, mvAllFromTomorrowToHistory, mvAllFromTomorrowToToday } = tasksSlice.actions