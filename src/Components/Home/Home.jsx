import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

import TasksMenu from "../TasksMenu/TasksMenu"
import DayBlock from "../DayBlock/DayBlock"
import TaslList from "../TaskList/TaslList"
import SwipeWrap from '../SwipeWrap/SwipeWrap'
import UpdateLocaleStorage from '../UpdateLocaleStorage/UpdateLocaleStorage'

import hasTouchScreen from '../../features/isMobileController'
import { useCheckDate } from '../../hooks/useCheckDate';
import { setDayNow } from "../../store/slices/appSlice";

export default function Home() {
  console.log("---Render Home");

  const dispatch = useDispatch()
  const { checkDateHandler, howToMidnight } = useCheckDate()

  const pageNum = useSelector((store) => store.app.page)
  const didUpdate = useSelector((store) => store.appConfig.didUpdate)

  // Все задачи обьект в ключах массив обьектов с задачами {1: [Прошлое], 2:[Сегодня], 3:[Завтра], 4: [Неделя] }
  let stateTasksFromReducer = useSelector((store) => store.tasks)
  let stateList = stateTasksFromReducer[pageNum]

  const activeMenu = useSelector((store) => store.app.menu) // done all work

  // При каждом перерендере компонента(При каждом изменении фильтра(Выборе меню))
  // Формируется копия оригинального state отфильтрованная с применением фильтра
  const visibleList = (() => {
    if (activeMenu === 'all') return stateList
    if (activeMenu === 'done') return stateList.filter((el) => el.status === 'done')
    if (activeMenu === 'work') return stateList.filter((el) => el.status === 'work')
  })()


  // Обновление задач по времени (в 24-00) если время уже прошло
  useEffect(() => {
    if (!didUpdate || Date.now() > didUpdate) {
      checkDateHandler()
      dispatch(setDayNow())
    }
  })

  // Устанавливаем таймер до следующей проверки времени
  useEffect(() => {
    const toMidnight = howToMidnight()
    const hourTimer = setTimeout(() => {
      checkDateHandler()
      dispatch(setDayNow())
        clearTimeout(hourTimer)
      }, toMidnight + 10000) //время до полуночи + 10 секунд

    return () => clearTimeout(hourTimer)
  })
  return (
      <SwipeWrap>

      <UpdateLocaleStorage>
      <DayBlock></DayBlock>
        <TasksMenu />
      <TaslList activeMenu={activeMenu} visibleList={visibleList} />
      </UpdateLocaleStorage>

    </SwipeWrap>

  )
}