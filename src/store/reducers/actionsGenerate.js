import {
  ADDTASK, TOGGLE_STATUS, SORT_BY_DONE, FILTER_BY_All, FILTER_BY_DONE,
  UPDATE_ITEM, DELETE_ITEM, CHECK_ALL_DONE, DELETE_DAY_ITEMS
} from './boilerplate'

class Actions {

  addTask(pageNum, payload) {
    return {
      type: ADDTASK,
      pageNum,
      payload, //: { pageNum, textTask }
    }
  }
  toogleStatus(pageNum, payload) {
    return {
      type: TOGGLE_STATUS,
      pageNum,
      payload,
    }
  }
  sortByDone(pageNum) {
    return {
      type: SORT_BY_DONE,
      pageNum,

    }
  }
  filterByAll(pageNum, payload) {
    return {
      type: FILTER_BY_All,
      pageNum,
      payload,
    }
  }
  filterByDone(pageNum, payload) {
    return {
      type: FILTER_BY_DONE,
      pageNum,
      payload,
    }
  }
  updatiItem(pageNum, payload) {
    return {
      type: UPDATE_ITEM,
      pageNum,
      payload: {
        index: payload.itemIndex,
        value: payload.textValue
      }
    }
  }
  deleteItem(pageNum, payload) {
    return {
      type: DELETE_ITEM,
      pageNum,
      payload,
    }
  }
  deleteAllItemDay(pageNum, payload) {
    return {
      type: DELETE_DAY_ITEMS,
      pageNum,
      payload,
    }
  }
  checkAllDone(pageNum, payload) {
    return {
      type: CHECK_ALL_DONE,
      pageNum,
      payload,
    }
  }
}

const actions = new Actions();
export default actions;