import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getLangFromBrowser = () => {
  const userLanguage = navigator.language || navigator.userLanguage;
  if (userLanguage === 'ru-RU') return 'RU'
  return 'EN';
}

// Thunk
const authStatus = createAsyncThunk(
  'config/isAuth',
  async (abortController) => {
    const response = await fetch('http://localhost:3100/api/user/auth', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: abortController.signal,
    })
    if (response.status === 200) {
      const result = await response.json()
      return result
    }
    console.log("▶ ⇛ response:", response);
    return false
  }
)

const userLogOut = createAsyncThunk(
  'config/userLogOut',
  async () => {
    const response = await fetch('http://localhost:3100/api/user/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      // signal: abortController.signal,
    })
    if (response.status === 200) {
      return true
    }
    return false
  }
)

const userSignIn = createAsyncThunk(
  'config/userSignIn',
  async () => {
    const response = await fetch('http://localhost:3100/api/user/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      // signal: abortController.signal,
    })
    if (response.status === 200) {
      return true
    }
    return false
  }
)


// Смотрим в LocalStorage
// Либо берем значения мз localStorage либо устанавливаем дефолтные
const configData = localStorage.getItem('wp_config')

const didUpdate = JSON.parse(configData)?.didUpdate
const firstVisit = JSON.parse(configData)?.visit
const appLang = JSON.parse(configData)?.lang
const appUserName = JSON.parse(configData)?.userName


const configSlice = createSlice({
  name: 'config',
  initialState: {
    lang: appLang || getLangFromBrowser(),
    didUpdate: didUpdate || null,
    userName: appUserName || '',
    visit: firstVisit || 0
  },

  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload.lang
    },
    setDidUpdateTime: (state, action) => {
      state.didUpdate = action.payload
    },
    setName: (state, action) => {
      state.userName = action.payload
    },
    setFirstVisit: (state, action) => {
      state.visit = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authStatus.rejected, (state, action) => {
      state.userName = appUserName || ''
    })
    builder.addCase(authStatus.fulfilled, (state, action) => {
      state.userName = action.payload.name || appUserName
    })
    // Logout
    builder.addCase(userLogOut.rejected, (state, action) => {
      state.userName = appUserName || ''
    })
    builder.addCase(userLogOut.fulfilled, (state, action) => {
      if (action.payload) {
        state.userName = ''
      } else {
        state.userName = appUserName || ''
      };
    })
  }

})

export default configSlice.reducer
export const { setLang, setSwipe, setDidUpdateTime, setName, setFirstVisit } = configSlice.actions
export { authStatus, userLogOut }

export const getAppLang = (state) => state.appConfig.lang