import React, { useState } from 'react';
import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import { Input, Tabs, TabList, Tab, TabPanels, TabPanel, } from '@chakra-ui/react';

import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import RequestSpinner from './RequestSpinner';

export default function LoginPage() {
  console.log("---RENDER LoginPage:");

  const [showSpinner, setShowSpinner] = useState(false)

  return (showSpinner ? (<RequestSpinner />) :

    <>
      <Tabs
        isFitted isLazy
        variant='enclosed'
        w={['80%', '50%']} m={'auto'}
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
            <SignInForm setShowSpinner={setShowSpinner} />
          </TabPanel>
          <TabPanel>
            <SignUpForm setShowSpinner={setShowSpinner} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
