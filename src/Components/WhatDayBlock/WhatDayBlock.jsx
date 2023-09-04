import React, { useMemo } from "react"

import { Center, Box } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import frormatedDate from "../../controller/formatedDate";

export default function WhatDayBlock({ pageNum }) {
  console.log("---Render WhatDayBlock");

  const dateNowFromStore = useSelector((store) => store.app.dateNow)
  const dateNow = useMemo(() => frormatedDate(dateNowFromStore), [dateNowFromStore])
  const dateTomorrow = useMemo(() => frormatedDate(dateNowFromStore + 24 * 60 * 60 * 1000), [dateNowFromStore])

  const text = (whatDay) => {
    switch (whatDay) {
      case 1:
        return `Задачи из Прошлого`
      case 2:
        return `Задачи на Сегодня ${dateNow.day} ${dateNow.month}`
      case 3:
        return `Задачи на Завтра ${dateTomorrow.day} ${dateTomorrow.month}`
      case 4:
        return 'Задачи на эту Неделю'
      default:
        break;
    }
  }
  return (
    <Center>

      <Box
        userSelect={'none'}
        borderRadius={'8px'}
        borderBottom={'2px solid'} borderColor={'custom.navBar.light'}
        w={['80%', '80%', '60%']} textAlign={'center'} mb={'1rem'} pb={'1rem'}>

        {text(pageNum)}

      </Box>


    </Center >
  )
}