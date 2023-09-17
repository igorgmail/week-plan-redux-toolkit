import React from 'react';

import { HStack, Button, Link, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function UserLoginButton({ onClose }) {

  const userName = useSelector((store) => store.appConfig.userName)
  const navigate = useNavigate();

  const loginButtonHandler = () => {
    onClose()
    navigate('/login')
  }

  const logOutButtonHandler = () => {

  }
  console.log("▶ ⇛ userName:", userName);
  return (userName ?
    <HStack>
      <Button variant='outline' mr={3} bg={'custom.red'}>
        Выйти
      </Button>
    </HStack>
    :
    <HStack>
      <Button
        onClick={loginButtonHandler}
        variant='outline' mr={3} bg={'custom.red'}
      >
        <Link>Войти</Link>
      </Button>
    </HStack>

  )
}