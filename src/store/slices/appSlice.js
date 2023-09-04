import { createSlice } from "@reduxjs/toolkit";
import isHasToushScreen from '../../controller/isMobileController.js'
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
    }
  }
})

export default appSlice.reducer
export const { setPage, setMenu, setSwipe } = appSlice.actions