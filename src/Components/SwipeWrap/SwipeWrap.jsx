import React from "react"

import { Container } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { useSwipe } from '../../hooks/swipeHook'

import { setPage, setMenu } from "../../store/slices/appSlice";
import hasTouchScreen from '../../features/isMobileController'


export default function SwipeWrap({ children }) {

  const dispatch = useDispatch()

  const pageNum = useSelector((store) => store.app.page)
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe()

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

  return (hasTouchScreen &&
    <Container
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={swipeHandler}
      h={'100vh'}
      maxW
    >
      {children}
    </Container>
  )
}