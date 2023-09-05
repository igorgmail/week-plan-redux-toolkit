import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { useDisclosure } from '@chakra-ui/react'
import { Container, Button, Input, Avatar } from '@chakra-ui/react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from '@chakra-ui/react'


export default function UserDrawer({ drawerUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Настройки</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter
            display={'flex'} justifyContent={'space-around'}>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}