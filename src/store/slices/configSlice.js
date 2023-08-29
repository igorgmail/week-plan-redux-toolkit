import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: 'config',
  initialState: { lang: 'RU', user: null },
  reducers: {
    setLang: (state, action) => {
      return { ...state, lang: action.payload }
    }
  }
})

export default configSlice.reducer