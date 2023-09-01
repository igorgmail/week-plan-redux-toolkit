import { createSlice } from "@reduxjs/toolkit";

const getLangFromBrowser = () => {
  const userLanguage = navigator.language || navigator.userLanguage;
  if (userLanguage === 'ru-RU') return 'RU'
  return 'EN';
}

const configSlice = createSlice({
  name: 'config',
  initialState: { lang: getLangFromBrowser(), user: null, visit: null },
  reducers: {
    setLang: (state, action) => {
      // console.log("▶ ⇛ action:", action);
      state.lang = action.payload.lang
      console.log("▶ ⇛ action.payload.lang:", action.payload.lang);
    }
  }
      // state.lang = action.payload.lang

})

export default configSlice.reducer
export const { setLang } = configSlice.actions