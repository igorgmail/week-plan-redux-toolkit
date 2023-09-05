import React, { useState, useEffect } from "react"
import { Flex, Button, HStack, Stack, Alert, AlertIcon } from '@chakra-ui/react';
// import { AlertIcon } from '@chakra-ui/icons'
// import { checkTodayTaskDate, checkTomorrowTaskDate } from "../controller/checkDate";
import { useSelector, useDispatch } from "react-redux";

// actions
import { mvAllFromTodayToHistory, mvAllFromTomorrowToHistory, mvAllFromTomorrowToToday, sortByDone } from '../store/slices/tasksSlice'
import { testAction } from "../store/slices/appSlice"; 

export default function TestButton() {

  const dispatch = useDispatch()
  const taskData = useSelector((store) => store.tasks)


//   const checkDateHandler = () => {
//     console.log("checkDateHandler");
//     // Сегодня
//     const dateFromTodayArray = taskData['2'][0]?.dataAdd
//     const checkTodayTask = checkTodayTaskDate(dateFromTodayArray)
//     if (checkTodayTask) {
//       // Переносим в прошлое
//       console.log("Переносим из сегодня в прошлое");
//       dispatch(mvAllFromTodayToHistory())
//       dispatch(sortByDone('1'))
//     }


//   const dateFromTomorrowArray = taskData['3'][0]?.dataAdd
//   const checkTomorrowTask = checkTomorrowTaskDate(dateFromTomorrowArray)

//   if (!checkTomorrowTask) return

//   if (checkTomorrowTask === 'TO_HISTORY') {
//     // Переносим в прошлое
//     dispatch(mvAllFromTomorrowToToday())
//     dispatch(sortByDone('1'))

//     return
//   }
//   if (checkTomorrowTask === 'TO_TODAY') {
//     // Переносим в Сегодня
//     dispatch(mvAllFromTomorrowToHistory())
//     dispatch(sortByDone('2'))
//     return
//   }
// }


  return (
    <Button
    >

      TestButton</Button >
  )
}
// 169 355 445 87 84 сегодня

// 169 350 116 10 00 вчера