import { useState } from 'react';
import { useSelector } from "react-redux";



function useSwipe() {

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

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

  const onTouchEnd = (swipeLeftHandler, swipeRighttHandler) => {
    if (!touchStart || !touchEnd || !swipe) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? swipeLeftHandler() : swipeRighttHandler()
    }
  }

  return { onTouchStart, onTouchMove, onTouchEnd }
}

export { useSwipe };