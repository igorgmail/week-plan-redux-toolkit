import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { Flex, Button, } from '@chakra-ui/react';

import { setFirstVisit } from '../../store/slices/configSlice'


export default function Main() {
  const dispatch = useDispatch()

  const firstVisitHandler = () => {
    dispatch(setFirstVisit(1))
  }
  return (
    <Flex>
      <Button
        onClick={firstVisitHandler}
      >Войти</Button>
    </Flex>
  )
}