import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { mvAllFromTodayToHistory, mvAllFromTomorrowToHistory, mvAllFromTomorrowToToday, sortByDone } from '../store/slices/tasksSlice'
import { setDidUpdateTime } from '../store/slices/configSlice'

function useCheckDate() {

  const dispatch = useDispatch()
  const taskData = useSelector((store) => store.tasks)

  // Обращаемся к массиву Today(2)
  const checkTodayTaskDate = () => {
    const dateFromTaskToday = taskData['2'][0]?.dataAdd
    const dateNow = new Date(Date.now())
    const dayNow = dateNow.getDate()

    const dayTask = new Date(dateFromTaskToday).getDate()
    // Если даты(Дни) не равны и если дата сейчас больше чем дата task(today) значит переносим в прошлое
    // Если true то переносим в прошлое
    return dayNow !== dayTask && dateNow > dateFromTaskToday
  }

  // Обращаемся к массиву Tomorrow(3)
  const checkTomorrowTaskDate = () => {
    const dateFromTaskTomorrow = taskData['3'][0]?.dataAdd
    // При добавлении задачи на завтра добавили к ним сутки(в миллисекундах)
    // Если дата сейчас(сегодня) равна дате Task(tomorrow) то переносим на сегодня
    // Если даты не равны и Дата сегодня плюс сутки будет равна дате Task значит оставляем в завтра
    const dateNow = new Date(Date.now())
    const dayNow = dateNow.getDate()

    const dayTask = new Date(dateFromTaskTomorrow).getDate()
    if (dayNow !== dayTask && dateFromTaskTomorrow > dateNow) return false // Не переносим(оставляем в завтра)
    if (dayNow !== dayTask && dateFromTaskTomorrow < dateNow) return 'TO_HISTORY'
    if (dayNow === dayTask) return 'TO_TODAY'
  }

  function howToMidnight() {
    const dateNow = new Date()
    const midNight = new Date(dateNow).setHours(24, 0, 0, 0)
    const different = midNight - dateNow

    // Преобразуем разницу в необходимый формат времени (часы, минуты, секунды)
    var ostatok = {
      hour: Math.floor(different / 3600000), // 1 час = 3600000 миллисекунд
      minute: Math.floor((different % 3600000) / 60000), // 1 минута = 60000 миллисекунд
      second: Math.floor((different % 60000) / 1000) // 1 секунда = 1000 миллисекунд
    };

    console.log("Времени до полуночи: " + ostatok.hour + " часов, " + ostatok.minute + " минут, " + ostatok.second + " секунд.");
    return different
  }

  const checkDateHandler = () => {
    console.log("checkDateHandler");
    const midNight = howToMidnight()
    dispatch(setDidUpdateTime(midNight + Date.now()))
    // Сегодня
    const dateFromTodayArray = taskData['2'][0]?.dataAdd
    const checkTodayTask = checkTodayTaskDate(dateFromTodayArray)
    if (checkTodayTask) {
      // Переносим в прошлое
      console.log("Переносим из сегодня в прошлое");
      dispatch(mvAllFromTodayToHistory())
      dispatch(sortByDone('1'))
    }


    const dateFromTomorrowArray = taskData['3'][0]?.dataAdd
    const checkTomorrowTask = checkTomorrowTaskDate(dateFromTomorrowArray)

    if (!checkTomorrowTask) return

    if (checkTomorrowTask === 'TO_HISTORY') {
      // Переносим в прошлое
      dispatch(mvAllFromTomorrowToToday())
      dispatch(sortByDone('1'))

      return
    }
    if (checkTomorrowTask === 'TO_TODAY') {
      // Переносим в Сегодня
      dispatch(mvAllFromTomorrowToHistory())
      dispatch(sortByDone('2'))
      return
    }
  }


  return { checkDateHandler, howToMidnight }
}

export { useCheckDate };