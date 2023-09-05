import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../Navbar/Navbar"
import Menu from "../Menu/Menu"
import DayBlock from "../DayBlock/DayBlock"
import TaslList from "../TaskList/TaslList"

import hasTouchScreen from '../../features/isMobileController'
import { useCheckDate } from '../../hooks/useCheckDate';
import { setDayNow } from "../../store/slices/appSlice";

export default function Home() {
  console.log("---Render Home");

  const dispatch = useDispatch()
  const { checkDateHandler, howToMidnight } = useCheckDate()

  const pageNum = useSelector((store) => store.app.page)
  const appConfig = useSelector((store) => store.appConfig)
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


  useEffect(() => {
    console.log('Поменяли stateTasksFromReducer');
    localStorage.setItem('wp_tasks', JSON.stringify(stateTasksFromReducer))
  }, [stateTasksFromReducer])

  useEffect(() => {
    console.log('Поменяли appConfig');
    localStorage.setItem('wp_config', JSON.stringify(appConfig))
  }, [appConfig, dispatch])

  // function addTimerForCheckDate() {

  //   const toMidnight = howToMidnight()

  //   console.log("TIMER-->", toMidnight / 600000);

  //   if (toMidnight / 3600000 > 1) {
  //     const hourTimer = setTimeout(() => {
  //       clearTimeout(hourTimer)

  //     }, 3600000)
  //   } else if (toMidnight / 3600000 > 1) {
  //     const tenMinuteTimer = setTimeout(() => {
  //       clearTimeout(tenMinuteTimer)

  //     }, 3600000)
  //   } else {

  //   }

  // }


  // Обновление задач
  useEffect(() => {
    if (!didUpdate || Date.now() > didUpdate) {
      checkDateHandler()
      dispatch(setDayNow())
    }
  })

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
    <>
      <Navbar />

      <DayBlock></DayBlock>
      <Menu />
      <TaslList activeMenu={activeMenu} visibleList={visibleList} />
    </>

  )
}