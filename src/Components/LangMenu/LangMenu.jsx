import React, { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useDisclosure } from "@chakra-ui/react"
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box } from '@chakra-ui/react'
import { ChevronDownIcon, Icon } from '@chakra-ui/icons'

import { setLang, getAppLang } from "../../store/slices/configSlice"

import { EarthIcon } from "../Icons/Icons"

export default function LangMenu() {
  console.log("---Render LangMenu");

  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const lang = useSelector(getAppLang)
  // const [lang, setLangState] = useState('RU')
  console.log("▶ ⇛ lang:", lang);

  const changeLangHandler = (lang) => {
    // setLangState(lang)
    dispatch(setLang({ lang }))
  }

  const menuOpenHandler = () => {
    onOpen()
  }

  return (
    <Flex flexDirection={'row'} alignItems={'center'} w={'100%'} justifyContent={'space-between'}>

      <Button
        variant={'ghost'} size='md' pl={0} tabIndex={3}>
        <EarthIcon onClick={menuOpenHandler} />
      </Button>

      <Box userSelect={'none'}>
        {lang}
      </Box>

      <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
          paddingRight={0}
          backgroundColor={'transparent'}
          as={Button}
          variant={'solid'}
          // rightIcon={}
          onClick={menuOpenHandler}
        >
          <ChevronDownIcon />
      </MenuButton>

      <MenuList minWidth={'5rem'}>
        <MenuItem onClick={() => changeLangHandler('RU')}>Русский</MenuItem>
        <MenuItem onClick={() => changeLangHandler('EN')}>English</MenuItem>
        <MenuItem onClick={() => changeLangHandler('FR')}>Français</MenuItem>
        <MenuItem onClick={() => changeLangHandler('PT')}>Portugues</MenuItem>
        <MenuItem onClick={() => changeLangHandler('IT')}>Italiano</MenuItem>
      </MenuList>
    </Menu>

    </Flex>
  )
}
