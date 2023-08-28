import React from 'react';
import { useSelector } from "react-redux"
import { Flex, Heading } from '@chakra-ui/react';
import StyleColorMode from '../StyleColorMode/StyleColorMode';
import { useColorModeValue } from "@chakra-ui/react";

const Navbar = React.memo(() => {
  console.log("---Render Navbar");
  const navBarBg = useColorModeValue("light.navBar", "dark.navBar");


  const title = useSelector((store) => store.title)



  return (
    <Flex w='100%' h='3rem' p={'.5rem'} backgroundColor={navBarBg} mb={['1rem', '2rem']} justifyContent={'space-between'} alignItems={'center'}>
      <StyleColorMode></StyleColorMode>
      <Heading as='h3' size='md' color={'white'}>
        {title}
      </Heading>
    </Flex>
  )
})

export default Navbar;