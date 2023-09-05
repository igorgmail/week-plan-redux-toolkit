import React, { useState, useEffect } from "react"
import { Box, Button, CloseButton, HStack, Stack, } from '@chakra-ui/react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/react";

export default function AlertMessage({ setShowAlert, showAlert }) {


  const { isOpen, onOpen, onClose } = useDisclosure()
  // const cancelRef = React.useRef()


  const closeAlertHandler = () => {
    setShowAlert(false)
    onClose()
  }
  // if (showAlert) isOpen = true

  return (
    <>
      {/* <Button onClick={onOpen}>Discard</Button> */}
      <AlertDialog
        motionPreset='slideInBottom'
        // leastDestructiveRef={cancelRef}
        onClose={closeAlertHandler}
        isOpen={showAlert}
        isCentered

      >
        <AlertDialogOverlay />

        <AlertDialogContent
          m={'1rem'}
          bg='#f0b5ba'
          fontSize={'1rem'}
        >
          <AlertDialogHeader>Информация</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            В этой версии вы не можете добавить больше 5 задач.
          </AlertDialogBody>
          <AlertDialogFooter m={'auto'}>
            <Button colorScheme='green' ml={3} onClick={closeAlertHandler}>
              Закрыть
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
    // <Alert status='warning' mt={'2rem'} position={'absolute'}>
    //   <AlertIcon />
    //   <Box>
    //     <AlertTitle>Внимание</AlertTitle>
    //     <AlertDescription>
    //       В этой версии Вы не можете добавить больше 10 задач
    //     </AlertDescription>
    //   </Box>
    //   <CloseButton
    //     alignSelf='flex-start'
    //     position='relative'
    //     right={-1}
    //     top={-1}
    //     onClick={closeAlertHandler}
    //   />
    // </Alert>
