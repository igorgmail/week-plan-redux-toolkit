import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { setPage, setMenu } from "../../store/slices/appSlice";


function useSwipe() {

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const dispatch = useDispatch()
  const pageNum = useSelector((store) => store.app.page)
  const swipe = useSelector((store) => store.app.swipe)


  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    if (swipe) {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX)
    } else {
      return
    }

  }

  const onTouchMove = (e) => {
    if (swipe) {
      setTouchEnd(e.targetTouches[0].clientX)
    } else {
      return
    }
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !swipe) return
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
    dispatch(setMenu('all'))
  }
  const swipeRighttHandler = () => {
    if (pageNum === 1) return
    dispatch(setPage(pageNum - 1))
    dispatch(setMenu('all'))
  }


  return { onTouchStart, onTouchMove, onTouchEnd }
}

export { useSwipe };