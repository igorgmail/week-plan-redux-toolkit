import React from "react"

import { Center, Box } from "@chakra-ui/react";

export default function WhatDayBlock({ pageNum }) {
  console.log("---Render WhatDayBlock");

  const text = (whatDay) => {
    switch (whatDay) {
      case 1:
        return 'Задачи из Прошлого'
      case 2:
        return 'Задачи на Сегодня'
      case 3:
        return 'Задачи на Завтра'
      case 4:
        return 'Задачи на эту Неделю'
      default:
        break;
    }
  }
  return (
    <Center>

      <Box
        borderRadius={'8px'}
        borderBottom={'2px solid'} borderColor={'custom.navBar.light'}
        w={['80%', '80%', '60%']} textAlign={'center'} mb={'1rem'}>

        {text(pageNum)}

      </Box>


    </Center >
  )
}