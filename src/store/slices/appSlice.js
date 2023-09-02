import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: { page: 2, menu: 'all', swipe: true },
  reducers: {
    setPage: (state, action) => {
      console.log("▶ ⇛ action.payload:", action.payload);
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