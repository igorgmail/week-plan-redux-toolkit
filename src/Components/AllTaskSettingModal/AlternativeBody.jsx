import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex, Center } from "@chakra-ui/react"
import { SettingsIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'



export default function AlternativeBody({ text, alertHandler }) {

  // const deleteChooseHandler = (status) => {
  //   if (status) {
  //     console.log("DELETE ALl");
  //   } else {
  //     console.log("NOT DELETE ALl");
  //   }
  // }


  return (

    <Flex w={'100%'} justifyContent={'space-between'} flexDirection={'column'} gap={4}>
      <Center>{text}</Center>
      <Button onClick={() => alertHandler(true)} color={'white'} backgroundColor={'#2a9d8f'}>
        Подтвердить
      </Button>
      <Button onClick={() => alertHandler(false)} color={'white'} backgroundColor={'#f4a261'}>Отмена</Button>
    </Flex>
  )
}