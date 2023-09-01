import { v4 as uuidv4 } from 'uuid'

const mockTasks = {
  1: [{
    task: 'Это первая тестовая задача Прошлого',
    status: 'work',
    dataAdd: Date.now(),
    key: uuidv4()
  },
  {
    task: 'Это Вторая тестовая задача Прошлого',
    status: 'done',
    dataAdd: Date.now(),
    key: uuidv4()
  }],
  2: [{
    task: 'Это первая тестовая задача Сегодня',
    status: 'work',
    dataAdd: Date.now(),
    key: uuidv4()
  },
  {
    task: 'Это Вторая тестовая задача Сегодня',
    status: 'done',
    dataAdd: Date.now(),
    key: uuidv4()
  }],
  3: [{
    task: 'Это первая тестовая задача на Завтра',
    status: 'work',
    dataAdd: Date.now(),
    key: uuidv4()
  },
  {
    task: 'Это Вторая тестовая задача на Завтра',
    status: 'done',
    dataAdd: Date.now(),
    key: uuidv4()
  }],
  4: [{
    task: 'Это первая тестовая задача на Неделю',
    status: 'work',
    dataAdd: Date.now(),
    key: uuidv4()
  },
  {
    task: 'Это Вторая тестовая задача на Неделю',
    status: 'done',
    dataAdd: Date.now(),
    key: uuidv4()
  }],
}

const initStateAllTasks = () => {
  const dayDataFromLocal = localStorage.getItem('wp_tasks');
  let dataTaskList;
  if (dayDataFromLocal) {
    dataTaskList = JSON.parse(dayDataFromLocal)
  } else {
    dataTaskList = mockTasks
  }
  return dataTaskList

}
export { initStateAllTasks }