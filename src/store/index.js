import { configureStore } from '@reduxjs/toolkit'

import titleSlice from './slices/titleslice'
import appSlice from './slices/appSlice'
import configSlice from './slices/configSlice'
import tasksSlice from './slices/tasksSlice'

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    app: appSlice,
    appConfig: configSlice,
    title: titleSlice
  }
})

export default store