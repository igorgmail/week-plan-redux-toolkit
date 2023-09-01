import { createSlice } from "@reduxjs/toolkit";

const getLangFromBrowser = () => {
  const userLanguage = navigator.language || navigator.userLanguage;
  return userLanguage || 'en-EN';
}
const configSlice = createSlice({
  name: 'config',
  initialState: { lang: getLangFromBrowser(), user: null, visit: null },
  reducers: {
    setLang: (state, action) => {
      return { ...state, lang: action.payload }
    }
  }
})

export default configSlice.reducer