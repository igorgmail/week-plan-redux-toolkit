import React from "react"
import { useDispatch, useSelector } from "react-redux";

import { Flex, Button, Box } from "@chakra-ui/react";
import WhatDayBlock from "../WhatDayBlock/WhatDayBlock";
import { setPage, setMenu } from "../../store/slices/appSlice";


const DayBlock = React.memo(() => {
  console.log("---Render DayBlock");

  const dispatch = useDispatch()
  const pageNum = useSelector((store) => store.app.page) // 1,2,3,4 Сегодня Завтра Неделя

  const font = ['0.8rem', '1rem']

  const chooseDayHandler = (day) => {
    dispatch(setPage(day))
    // при переходе на новую вкладку обновляем menu на "все задачи"
    dispatch(setMenu('all'))
  }

  return (

    <Box w={'100%'} >
      <Flex
        w={'100%'} flexDirection={'row'} justifyContent={'center'} gap={['0.8rem', '1.5rem', '2rem']} m={'2rem auto'}>

        <Button isActive={pageNum === 1} transform={pageNum === 1 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" _hover={false} onClick={() => chooseDayHandler(1)}>Прошлое</Button>
        <Button isActive={pageNum === 2} transform={pageNum === 2 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" _hover={false} onClick={() => chooseDayHandler(2)}>Сегодня</Button>
        <Button isActive={pageNum === 3} transform={pageNum === 3 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" _hover={false} onClick={() => chooseDayHandler(3)}>Завтра</Button>
        <Button isActive={pageNum === 4} transform={pageNum === 4 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" _hover={false} onClick={() => chooseDayHandler(4)}>Будущее</Button>
      </Flex>
      <WhatDayBlock pageNum={pageNum}></WhatDayBlock>
    </Box>

  )
})

export default DayBlock