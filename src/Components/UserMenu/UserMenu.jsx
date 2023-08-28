import React from 'react';
import { useSelector } from "react-redux"
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function UserMenu() {
  return (
    <Menu>
      <MenuButton rightIcon={<ChevronDownIcon />}>
        <Avatar size={'sm'}></Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem>Войти</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}