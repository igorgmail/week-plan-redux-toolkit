import React, { useEffect, useRef, useState } from "react"

import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex, Textarea } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

import VoiceToTextBlock from '../VoiceToTextBlock/VoiceToTextBlock'

import textCoctroller from "../../controller/textCoctroller"

import { useDispatch, useSelector } from "react-redux"

// actions
import { setSwipe } from '../../store/slices/appSlice'
import { addTask } from "../../store/slices/tasksSlice"


const AddTaskModal = React.memo(() => {
  console.log("---Render Modal Add Task");

  const [textVoice, setTextVoice] = useState('')
  const pageNum = useSelector((store) => store.app.page)
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalTextareaRef = useRef(null)

  const addTaskHandler = () => {
    const textTask = modalTextareaRef.current.value

    if (textCoctroller.isEmpty(textTask)) {
      dispatch(addTask({ pageNum, textTask }))
      onClose()
    } else return
  }

  const openModalHandler = () => {
    onOpen();
    setTextVoice('')
    dispatch(setSwipe(false))
  }

  const handleKeyPress = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      // Обработка события Ctrl + Enter
      event.preventDefault(); // Отменить стандартное действие (например, отправку формы)
      // Ваш код здесь
      addTaskHandler()
    }
  }

  useEffect(() => {
    if (!isOpen) {
      dispatch(setSwipe(true))
    }
  }, [isOpen, dispatch])

  return (
    <>
      <Button
        w={'3rem'}
        m={'auto'}
        variant={'outline'}
        colorScheme='green' size='md'
        onClick={openModalHandler}
      >
        <AddIcon />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered >
        <ModalOverlay />
        <ModalContent m={'1rem 1rem auto'} >
          <ModalHeader>Добавить Задачу</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              ref={modalTextareaRef}
              size='sm'
              resize={'vertical'}
              overflow="auto"
              autoFocus
              defaultValue={textVoice}
              onKeyUp={handleKeyPress}
            // focusBorderColor={'red.500'}
            >
            </Textarea>
          </ModalBody>
          <ModalFooter>
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Button onClick={() => addTaskHandler()} color={'white'} backgroundColor={'#2a9d8f'}>Добавить</Button>

              {/* <VoiceToTextBlock setTextVoice={setTextVoice}></VoiceToTextBlock> */}

              <Button onClick={onClose} color={'white'} backgroundColor={'#f4a261'}>Отменить</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
})

export default AddTaskModal