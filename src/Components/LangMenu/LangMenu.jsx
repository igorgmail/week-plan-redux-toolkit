import React, { useState } from "react"

import { setLang } from "../../store/slices/configSlice"
import { useDispatch, useSelector } from "react-redux"

import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function LangMenu() {
  console.log("---Render LangMenu");

  const dispatch = useDispatch()
  const [lang, setLangState] = useState('RU')

  const changeLangHandler = (lang) => {
    setLangState(lang)
    dispatch(setLang({ lang }))
  }
  return (
    <Menu>
      <MenuButton
        _hover={'none'}
        _active={'none'}
        color={'white'}
        backgroundColor={'transparent'}
        as={Button}
        variant={'solid'}
        rightIcon={<ChevronDownIcon />}>
        {lang}
      </MenuButton>
      <MenuList minWidth={'5rem'}>
        <MenuItem onClick={() => changeLangHandler('RU')}>RU</MenuItem>
        <MenuItem onClick={() => changeLangHandler('EN')}>EN</MenuItem>
        <MenuItem onClick={() => changeLangHandler('FR')}>FR</MenuItem>
        <MenuItem onClick={() => changeLangHandler('IT')}>IT</MenuItem>
      </MenuList>
    </Menu>
  )
}