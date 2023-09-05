import React from "react"
// import style from '../style.module.css'

import { Button } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'

export default function DeleteButton({ deleteItemHandler, itemKey }) {
  return (
    <Button onClick={() => deleteItemHandler(itemKey)} color={'white'} backgroundColor={'custom.cancelBg'}>
      <DeleteIcon></DeleteIcon>
    </Button>
  )
}