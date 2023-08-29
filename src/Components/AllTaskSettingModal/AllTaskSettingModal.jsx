import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex } from "@chakra-ui/react"
import { SettingsIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'

import AlertConfirm from "./AlertConfirm"
// Button
import CloseButton from "./Button/CloseButton" 

// actions
import { checkAllDone, removeAllFromOneTab } from "../../store/slices/tasksSlice"


const AllTaskSettingModal = React.memo(({ visibleList }) => {
  console.log("---Render Modal All Task Setting");


  const [showAlert, setShowAlert] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const pageNum = useSelector((store) => store.app.page)
  const menu = useSelector((store) => store.app.menu)
  // AllDone for modal Все выполненны tru || false не все выполненны
  const [statusAll, setStatusAll] = useState()



  const checkAllHandler = (statusCheckAll) => {
    // Отмечаем все
    if (!statusCheckAll) {
      dispatch(checkAllDone({ pageNum, status: true }))
      onClose()
    }
    // Снимаем метки со всех
    if (statusCheckAll) {
      dispatch(checkAllDone({ pageNum, status: false }))
      onClose()
    }
  }

  let titleForAlert = menu === 'done' ? 'Завешено' : menu === 'all' ? 'Все задачи' : 'Сделать';
  const deleteAllHandler = () => {
    console.log("DELETE ALl Handler");
    titleForAlert = menu === 'done' ? 'Завешено' : menu === 'all' ? 'Все задачи' : 'Сделать'
    console.log("▶ ⇛ titleForAlert:", titleForAlert);
    setShowAlert(true)
  }

  // Окно подтверждения удаления
  const alertHandler = (result) => {
    if (result) {
      console.log("Будет все удалено");
      dispatch(removeAllFromOneTab({ pageNum, menu }))
    } else {
      console.log("Была отмена");
    }
    setShowAlert(false)
    onClose()
  }


  // Для отображения ('Отменить Все') || ('Выделить Все')
  useEffect(() => {
    const statusAllDoneForModal = !visibleList.some((el) => el.status === 'work')
    setStatusAll(statusAllDoneForModal)

  }, [visibleList])

  useEffect(() => {
    setShowAlert(false)
  }, [isOpen])

  return (
    <>
      <SettingsIcon onClick={onOpen} cursor={'pointer'} fontSize={'1.3rem'}></SettingsIcon>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent m={'auto 1rem'}>
          <ModalHeader>{titleForAlert}</ModalHeader>
          <ModalCloseButton />

          <ModalBody m={3}>
            {showAlert ? (<AlertConfirm text={`Удалить все из ${titleForAlert}?`} alertHandler={alertHandler}></AlertConfirm>) :

            <Flex w={'100%'} justifyContent={'space-between'} flexDirection={'column'} gap={4}>
                <Button onClick={() => checkAllHandler(statusAll)} color={'white'} backgroundColor={'#2a9d8f'}>
                  {statusAll ? ('Отменить Все') : ('Выделить Все')
                  }
                </Button>
                <Button onClick={() => deleteAllHandler()} color={'white'} backgroundColor={'#f4a261'}>Удалить все</Button>
              </Flex>
            }

          </ModalBody>

          <ModalFooter>
            {showAlert ? <></> :
            <CloseButton closeModal={onClose}></CloseButton>
            }
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  )
})

export default AllTaskSettingModal