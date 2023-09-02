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
      state.lang = action.payload.lang
    },
  }

})

export default configSlice.reducer
export const { setLang, setSwipe } = configSlice.actions