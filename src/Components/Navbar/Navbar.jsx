import React, { useState } from 'react';
import { useSelector } from "react-redux"
import { Flex, Heading, HStack } from '@chakra-ui/react';
import { useColorModeValue } from "@chakra-ui/react";

import UserDrawer from '../UserDrawer/UserDrawer';

const Navbar = React.memo(() => {
  console.log("---Render Navbar");
  const navBarBg = useColorModeValue("light.navBar", "dark.navBar");

  const [drawerUser, setDrawerUser] = useState(false)
  const title = useSelector((store) => store.title)



  return (
    <Flex w='100%' h='3rem' p={'.5rem'} backgroundColor={navBarBg} mb={['1rem', '2rem']} justifyContent={'space-between'} alignItems={'center'}>
      <Heading
        as='h3' size='md' color={'white'} userSelect={'none'}
        cursor={'pointer'}
        href='/'
      >
        {title}
      </Heading>
      <HStack>
        <UserDrawer drawerUser={drawerUser}></UserDrawer>
      </HStack>

    </Flex>
  )
})

export default Navbar;