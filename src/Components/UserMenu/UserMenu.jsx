import React from 'react';
import { useSelector } from "react-redux"
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function UserMenu() {
  return (
    <Menu>
      <MenuButton >
        <Avatar size={['xs', 'sm']}></Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem>Войти</MenuItem>
        <MenuItem>Настройки</MenuItem>
        <MenuItem>Информация</MenuItem>
      </MenuList>
    </Menu>
  )
}