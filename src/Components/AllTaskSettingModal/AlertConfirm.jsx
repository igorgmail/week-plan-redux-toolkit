import React from "react"

import { Button, Flex, Center } from "@chakra-ui/react"

export default function AlertConfirm({ text, alertHandler }) {

  return (

    <Flex w={'100%'} justifyContent={'space-between'} flexDirection={'column'} gap={4}>
      <Center>{text}</Center>
      <Button onClick={() => alertHandler(true)} color={'white'} backgroundColor={'custom.confirmBg'}>
        Подтвердить
      </Button>
      <Button onClick={() => alertHandler(false)} color={'white'} backgroundColor={'custom.cancelBg'}>Отмена</Button>
    </Flex>
  )
}