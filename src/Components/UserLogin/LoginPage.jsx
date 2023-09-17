import React from 'react';
import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import { Input, Tabs, TabList, Tab, TabPanels, TabPanel, } from '@chakra-ui/react';

import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'


export default function LoginPage() {
  return (

    <>
      {/* <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl> */}
      <Tabs
        isFitted variant='enclosed'
        w={'50%'} m={'auto'}
        bg={'taskListBg'}
        fontWeight={'500'}
        // color={'tabsFont'}
        colorScheme={'facebook'}
        direction={"rtl"}
      >
        <TabList>
          <Tab _selected={{ bg: 'navBarBg' }} fontWeight={'500'}>Войти</Tab>
          <Tab _selected={{ bg: 'navBarBg' }} fontWeight={'500'}>Регистрация</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SignInForm />
          </TabPanel>
          <TabPanel>
            <SignUpForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>



  );
};
