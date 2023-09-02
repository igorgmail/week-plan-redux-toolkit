import React from "react"
import { useState } from "react"

import { useColorModeValue } from "@chakra-ui/react";
import { Button, Flex, InputGroup, Text } from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons'

import AboutTaskModal from "../AboutTaskModal/AboutTaskModal"

// actions
import { setSwipe } from '../../store/slices/appSlice'
import { toggleStatus, sortByDone } from "../../store/slices/tasksSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Task({ itemData }) {
  console.log("---Render Task");
  const taskDoneBg = useColorModeValue("light.taskDoneBg", "dark.taskDoneBg");

  const dispatch = useDispatch()
  const pageNum = useSelector((store) => store.app.page)
  const item = itemData[0]
  const index = itemData[1]

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [itemDataForModal, setItemDataForModal] = useState(null)

  const openModal = (e) => {
    // Получаем данные для отправки в модальное окно для редактирования
    const itemIndex = e.target.dataset.itemIndex;
    const itemStatus = e.target.dataset.itemStatus;
    const itemText = e.target.innerText
    const dataIKey = e.target.closest('.task-input').dataset.itemKey
    const newData = { text: itemText, index: itemIndex, status: itemStatus, key: dataIKey };
    setItemDataForModal(newData);
    setIsModalOpen(true);
    dispatch(setSwipe(false))
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(setSwipe(true))
  };


  const toogleStatusButton = (e) => {
    const dataIKey = e.target.closest('.task-input').dataset.itemKey
    dispatch(toggleStatus({ pageNum, dataIKey }))
    dispatch(sortByDone(pageNum))
  }

  return (
    <Flex
      className={"task-input"}
      data-item-key={item.key}
      flexDirection={['column', 'column', 'row']}
      justifyContent={'space-beetween'} alignItems={'center'} w={'100%'} gap={'8px'} mb={'10px'}
    >

      <InputGroup
          w={'100%'}
          m={'auto'}
          border='2px' borderColor='gray.400'
          borderRadius={'8px'}
        // backgroundColor={taskDoneBg}
        backgroundColor={item.status === 'done' ? taskDoneBg : 'none'}
        >

        <Text
          overflow={'hidden'} whiteSpace={'nowrap'} textOverflow={'ellipsis'}
          userSelect={'none'}
          margin={'auto'}
          pl={['0.5rem', '1rem']}
          w={'100%'}
          data-item-index={index}
          data-item-status={item.status}
          onClick={openModal}
          cursor={'pointer'}
          fontSize={['.8rem', '1rem']}
          fontWeight={'500'}
          textDecoration={item.status === 'done' ? 'line-through' : 'none'}
        >{item.task}</Text>

        {isModalOpen &&
          <AboutTaskModal itemDataForModal={itemDataForModal} isModalOpen={isModalOpen} closeModal={closeModal} />}

        <Button onClick={toogleStatusButton}
          p={['0.5rem', '1rem']}
          variant={'outline'}
          borderColor={'rgb(160, 174, 192)'}>
          <CheckIcon color={item.status === 'done' ? 'green.500' : ''} />
        </Button>
      </InputGroup>


      <Flex w={['100%', '100%', 'auto']} gap={'8px'}>

      </Flex>

    </Flex >
  )
}