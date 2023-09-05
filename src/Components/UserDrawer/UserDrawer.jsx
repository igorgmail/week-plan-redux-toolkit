import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { useDisclosure } from '@chakra-ui/react'
import { Container, Button, Input, Avatar, HStack, Box } from '@chakra-ui/react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from '@chakra-ui/react'

import { useColorModeValue } from "@chakra-ui/react";

import StyleColorMode from '../StyleColorMode/StyleColorMode'
import LangMenu from '../LangMenu/LangMenu'

export default function UserDrawer({ drawerUser }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const drawerUserBg = useColorModeValue("light.drawerUserBg", "dark.drawerUserBg");

  return (
    <>
      <Avatar
        size={['xs', 'sm']} cursor={'pointer'}
        ref={btnRef}
        colorScheme='teal'
        onClick={onOpen}></Avatar>
      {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={drawerUserBg}>
          <DrawerCloseButton />
          <DrawerHeader>Настройки</DrawerHeader>

          <DrawerBody>

            <HStack justifyContent={'stretch'}>
              <Box w={'50%'}>Тема</Box>
              <StyleColorMode></StyleColorMode>
            </HStack>

            <HStack>
              <Box w={'50%'}>Язык</Box>
              <LangMenu></LangMenu>
            </HStack>

            <HStack>
              <Box w={'50%'}>Конец Недели :</Box>
              <Box>Воскресенье</Box>

            </HStack>

          </DrawerBody>

          <DrawerFooter
            display={'flex'} justifyContent={'space-around'}>
            <Button variant='outline' mr={3} onClick={onClose} bg={'custom.red'}>
              Cancel
            </Button>
            <Button bg={'custom.blue'}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}