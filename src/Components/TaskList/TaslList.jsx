import React from "react"
import { useMemo } from "react"

import { Box, Input, InputGroup, Badge, Flex } from "@chakra-ui/react";

import Task from "../Task/Task"
import AllTaskSettingModal from "../AllTaskSettingModal/AllTaskSettingModal";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

import { useDispatch, useSelector } from "react-redux";
import { useSwipe } from '../hooks/swipeHook'

import { setPage, setMenu } from "../../store/slices/appSlice";


export default function TaslList({ activeMenu, visibleList }) {
  console.log("---Render TaskList");

  const dispatch = useDispatch()
  // const swipe = useSelector((store) => store.app.swipe)

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe()
  const pageNum = useSelector((store) => store.app.page)

  const visibleListMemo = useMemo(() => visibleList, [visibleList])

  function swipeHandler() {
    const swipeLeftHandler = () => {
      if (pageNum === 4) return
      dispatch(setPage(pageNum + 1))
      dispatch(setMenu('all'))
    }
    const swipeRighttHandler = () => {
      if (pageNum === 1) return
      dispatch(setPage(pageNum - 1))
      dispatch(setMenu('all'))
    }
    onTouchEnd(swipeLeftHandler, swipeRighttHandler)
  }

  // Стиль(цвет) для bage 
  const activeBage = ((activeMenu) => {
    if (activeMenu === 'all') return { text: 'Все Задачи', color: 'custom.task_all' }
    if (activeMenu === 'done') return { text: 'Завершено', color: 'custom.task_done' }
    if (activeMenu === 'work') return { text: 'Сделать', color: 'custom.task_todo' }
  })(activeMenu)

  return (

    <Box
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={swipeHandler}
      border={'1px'} padding={'.5rem'} borderRadius={'8px'} w={['90%', '90%', '60%']} m={'1.5rem auto'}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Badge textAlign={'center'} backgroundColor={activeBage.color} color={'white'} mb={['10px', '1rem', '2rem']}>{activeBage.text}</Badge>

        {/* Modal Для всех задач */}
        {visibleList.length > 0 && (<AllTaskSettingModal visibleList={visibleList} />)}

      </Flex>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'1rem'}>
        {pageNum !== 1 && activeMenu !== 'done' && <AddTaskModal></AddTaskModal>}
      </Flex>

      {visibleListMemo.length > 0
        ?
        (visibleListMemo.map((el) => (
          <Task item={el} key={el.key} ></Task>
        )))
        :
        (
          // Если нет задач
          <InputGroup w={'50%'} m={'auto'} mt={'2rem'} border='2px' borderColor='gray.400' borderRadius={'8px'}>
            <Input fontWeight={'500'} readOnly={true} defaultValue={'Нет Задач'} textDecoration={'none'} textAlign={'center'} />
          </InputGroup>
        )
      }

    </Box>

  )
}