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
        pl={0}
        _hover={false}
        _active={false}
        // color={'custom.taskDoneBg'}
        backgroundColor={'transparent'}
        as={Button}
        variant={'solid'}
        rightIcon={<ChevronDownIcon />}>
        {lang}
      </MenuButton>
      <MenuList minWidth={'5rem'}>
        <MenuItem onClick={() => changeLangHandler('RU')}>Русский</MenuItem>
        <MenuItem onClick={() => changeLangHandler('EN')}>English</MenuItem>
        <MenuItem onClick={() => changeLangHandler('FR')}>Français</MenuItem>
        <MenuItem onClick={() => changeLangHandler('PT')}>Portugues</MenuItem>
        <MenuItem onClick={() => changeLangHandler('IT')}>Italiano</MenuItem>
      </MenuList>
    </Menu>
  )
}