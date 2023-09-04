import { createSlice } from "@reduxjs/toolkit";

const getLangFromBrowser = () => {
  const userLanguage = navigator.language || navigator.userLanguage;
  if (userLanguage === 'ru-RU') return 'RU'
  return 'EN';
}

const didUpdateData = localStorage.getItem('wp_config')
const didUpdate = JSON.parse(didUpdateData)?.didUpdate

const configSlice = createSlice({
  name: 'config',
  initialState: { lang: getLangFromBrowser(), didUpdate: didUpdate || null, user: null, visit: null },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload.lang
    },
    setDidUpdateTime: (state, action) => {
      state.didUpdate = action.payload
    }
  }

})

export default configSlice.reducer
export const { setLang, setSwipe, setDidUpdateTime } = configSlice.actions