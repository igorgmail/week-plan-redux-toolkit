import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import taskReducer from './reducers/taskReducer'
import appReducer from './reducers/appReducer'

// Если один reducer
// const store = createStore(reducer)
const rootReducer = combineReducers({
  tasks: taskReducer,
  app: appReducer,
  title: () => 'WeekPlan' // Reducer функция
})

const store = createStore(rootReducer, composeWithDevTools())

export default store