// boilerPlate
import { ADDTASK, TOGGLE_STATUS, SORT_BY_DONE, FILTER_BY_All, FILTER_BY_DONE, UPDATE_ITEM, DELETE_ITEM, CHECK_ALL_DONE, DELETE_DAY_ITEMS } from './boilerplate'
import initStateAllTasks from './initStateAllTasks';
const initState = (() => {

  const dayDataFromLocal = localStorage.getItem('wp_tasks');
  let dataTaskList;
  if (dayDataFromLocal) {
    dataTaskList = JSON.parse(dayDataFromLocal)
  } else {
    dataTaskList = initStateAllTasks
  }
  return dataTaskList
})()

export default function taskReducer(state = initState, action) {


  switch (action.type) {
    case ADDTASK:
      const newTask = {
        task: action.payload,
        status: 'work',
        dataEnd: Date.now()
      }
      return { ...state, [action.pageNum]: [{ ...newTask }, ...state[action.pageNum]], }

    case TOGGLE_STATUS:

      const newState = state[action.pageNum].map((el, ind) => {
        if (ind === Number(action.payload)) {
          if (el.status === 'done') {
            return { ...el, status: 'work' };
          } else {
            return { ...el, status: 'done' };
          }
        }
        return el
      })

      return { ...state, [action.pageNum]: [...newState], }

    case SORT_BY_DONE:
      const sortedArray = [...state[action.pageNum]].sort((a, b) => {
        if (a.status === 'done' && b.status !== 'done') {
          return 1; // a должно идти после b
        }
        if (a.status !== 'done' && b.status === 'done') {
          return -1; // a должно идти перед b
        }
        return 0; // порядок a и b остается неизменным
      });
      return { ...state, [action.pageNum]: [...sortedArray], } 

    // case FILTER_BY_All:
    //   return [...state]

    // case FILTER_BY_DONE:
    //   return [...state].filter((el) => el.status === 'done')

    case UPDATE_ITEM:
      const updateDayArray = [...state[action.pageNum]].map((el, ind) => {
        if (ind === Number(action.payload.index)) {
          return { ...el, task: action.payload.value }
        }
        return el
      })
      return { ...state, [action.pageNum]: [...updateDayArray] }

    case DELETE_ITEM:
      const newStateDayArray = [...state[action.pageNum]].filter((el, ind) => ind !== Number(action.payload))
      return { ...state, [action.pageNum]: [...newStateDayArray] }

    case DELETE_DAY_ITEMS:
      // const stateDayArray = [...state[action.pageNum]].filter((el, ind) => ind !== Number(action.payload))
      return { ...state, [action.pageNum]: [] }

    case CHECK_ALL_DONE:
      if (action.payload) {
        const allDone = [...state[action.pageNum]].map((el) => { el.status = 'done'; return el })
        return { ...state, [action.pageNum]: [...allDone] }
      } else {
        const allWork = [...state[action.pageNum]].map((el) => { el.status = 'work'; return el })
        return { ...state, [action.pageNum]: [...allWork] }
      }


    default:
      return { ...state }
  }

}