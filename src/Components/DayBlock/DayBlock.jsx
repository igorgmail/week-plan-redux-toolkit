import React, { useState } from "react"
// import { Swipeabl } from 'react-swipeable';
import { useDispatch, useSelector } from "react-redux";

import { Flex, Button, Box } from "@chakra-ui/react";
import WhatDayBlock from "../WhatDayBlock/WhatDayBlock";
import { setPage, setMenu } from "../../store/slices/appSlice";


const DayBlock = React.memo(() => {
  console.log("---Render DayBlock");

  const dispatch = useDispatch()
  const pageNum = useSelector((store) => store.app.page) // 1,2,3,4 Сегодня Завтра Неделя

  //  
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    console.log("TOUCH STARt");
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? swipeLeftHandler() : swipeRighttHandler()
    }
    // console.log("SWIPE");
  }

  const swipeLeftHandler = () => {
    if (pageNum === 4) return
    dispatch(setPage(pageNum + 1))
  }
  const swipeRighttHandler = () => {
    if (pageNum === 1) return
    dispatch(setPage(pageNum - 1))
  }
// 

  const font = ['0.8rem', '1rem']

  const chooseDayHandler = (day) => {
    // setActiveMenuHandler('all')
    dispatch(setPage(day))
    // при переходе на новую вкладку обновляем menu на "все задачи"
    dispatch(setMenu('all'))
  }




  return (

    <Box w={'100%'} >
      <Flex onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} 
        w={'100%'} flexDirection={'row'} justifyContent={'center'} gap={['0.8rem', '1.5rem', '2rem']} m={'2rem auto'}>

        <Button isActive={pageNum === 1} transform={pageNum === 1 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => chooseDayHandler(1)}>Прошлое</Button>
        <Button isActive={pageNum === 2} transform={pageNum === 2 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => chooseDayHandler(2)}>Сегодня</Button>
        <Button isActive={pageNum === 3} transform={pageNum === 3 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => chooseDayHandler(3)}>Завтра</Button>
        <Button isActive={pageNum === 4} transform={pageNum === 4 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => chooseDayHandler(4)}>Неделя</Button>
      </Flex>
      <WhatDayBlock pageNum={pageNum}></WhatDayBlock>
    </Box>

  )
})

export default DayBlock