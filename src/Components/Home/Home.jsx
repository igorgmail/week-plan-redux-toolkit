import React, { useEffect } from "react"
import { useSelector } from "react-redux";

import Navbar from "../Navbar/Navbar"
import Menu from "../Menu/Menu"
import DayBlock from "../DayBlock/DayBlock"
import TaslList from "../TaskList/TaslList"

import hasTouchScreen from '../../controller/isMobileController'

export default function Home() {
  console.log("---Render Home");

  const pageNum = useSelector((store) => store.app.page)
  const appConfig = useSelector((store) => store.appConfig)

  // Все задачи обьект в ключах массив обьектов с задачами {1: [Прошлое], 2:[Сегодня], 3:[Завтра], 4: [Неделя] }
  let stateFromReducer = useSelector((store) => store.tasks)
  let stateList = stateFromReducer[pageNum]

  const activeMenu = useSelector((store) => store.app.menu) // done all work

  // При каждом перерендере компонента(При каждом изменении фильтра(Выборе меню))
  // Формируется копия оригинального state отфильтрованная с применением фильтра
  const visibleList = (() => {
    if (activeMenu === 'all') return stateList
    if (activeMenu === 'done') return stateList.filter((el) => el.status === 'done')
    if (activeMenu === 'work') return stateList.filter((el) => el.status === 'work')
  })()


  useEffect(() => {
    console.log('Поменяли stateFromReducer');
  }, [stateFromReducer])

  useEffect(() => {
    console.log('Поменяли appConfig');
  }, [appConfig])
  return (
    <>
      <Navbar />
      <DayBlock></DayBlock>
      <Menu />
      <TaslList activeMenu={activeMenu} visibleList={visibleList} />
    </>

  )
}