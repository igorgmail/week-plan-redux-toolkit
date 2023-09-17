import { createSlice } from "@reduxjs/toolkit";
import isHasToushScreen from '../../features/isMobileController.js'

const appSlice = createSlice({
  name: 'app',

  initialState: { page: 2, menu: 'all', swipe: true, updateTime: null, dateNow: Date.now(), isMobile: isHasToushScreen() },

  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
    setMenu: (state, action) => {
      state.menu = action.payload
    },
    setSwipe: (state, action) => {
      state.swipe = action.payload
    },
    setDayNow: (state) => {
      state.dateNow = Date.now()
    },
    testAction: (state, action) => {

    }
  }
})

export default appSlice.reducer
export const { setPage, setMenu, setSwipe, setDayNow, testAction } = appSlice.actions