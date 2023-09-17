import React from "react"
import { useSelector } from "react-redux"
import { useDisclosure } from '@chakra-ui/react'
import { Button, Avatar, Flex, HStack, Stack, Box, Divider } from '@chakra-ui/react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@chakra-ui/react'

import StyleColorMode from '../StyleColorMode/StyleColorMode'
import LangMenu from '../LangMenu/LangMenu'

import { LoginIcon, LogOutIcon } from "../Icons/Icons"
export default function UserDrawer({ drawerUser }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)

  const userName = useSelector((store) => store.appConfig.userName)

  const logOInHandler = () => {

  }

  const logOutHandler = () => {

  }
  const CustomDivider = () => (
    <Divider
      opacity={'0.8'}
      borderColor={'#cdcdcd'}
      width={'auto'}
      mb={'1rem'}
    />
  )
  return (
    <>
      <Avatar
        onClick={onOpen}
        name={userName}
        ref={btnRef}
        size={['xs', 'sm']} cursor={'pointer'} colorScheme='teal'
      />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'drawerUserBg'}>

          <DrawerHeader>
            <Flex justifyContent={'flex-end'}>

              <Box >
                <Box
                  onClick={userName ? logOutHandler : logOInHandler}
                  display={'flex'} cursor={'pointer'} tabIndex={2}>
                  <Box fontSize={'1rem'} mr={'1rem'}>
                    {userName ? 'Выйти' : 'Войти'}
                  </Box>
                  <Stack display={'flex'} justifyContent={'center'}>
                    {userName ?
                      <LogOutIcon w={'16px'} height={'16px'}></LogOutIcon>
                      :
                      <LoginIcon w={'16px'} height={'16px'}></LoginIcon>
                    }
                  </Stack>
                </Box>
              </Box>

            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDir={'column'}>

              <CustomDivider />

              <HStack>
                <Box w={'50%'} flexShrink={0}>Тема</Box>
              <StyleColorMode></StyleColorMode>
            </HStack>

            <HStack>
                <Box w={'50%'} flexShrink={0}>Язык</Box>
              <LangMenu></LangMenu>
            </HStack>

              <CustomDivider />

            </Flex>
          </DrawerBody>

          <DrawerFooter
            display={'flex'} justifyContent={'space-around'}>
            <Button variant='outline' mr={3} onClick={onClose} bg={'custom.red'} tabIndex={1}>
              Закрыть
            </Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  )
}