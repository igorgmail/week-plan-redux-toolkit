import { useColorMode } from '@chakra-ui/react'
import { Button, Flex, Switch } from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '../Icons/Icons';


export default function StyleColorMode() {

  // Меняет тему и записываетее в localStorage в 'chakra-ui-color-mode'
  const { colorMode, toggleColorMode } = useColorMode()

  const modeHandler = (mode) => {
    if (colorMode === mode) return
    toggleColorMode()
  }

  const switchHandler = (e) => {
    e.target.checked ? modeHandler('light') : modeHandler('dark')
  }

  return (

    <Flex flexDirection={'row'} alignItems={'center'} w={'100%'} justifyContent={'space-between'}>

      <Button onClick={() => modeHandler('dark')}
        variant={'ghost'} size='md' pl={0} tabIndex={3}>
        <MoonIcon _hover={false} fontSize={colorMode === 'dark' && '1.5rem'} /> 
      </Button>

      <Switch size='md' onChange={switchHandler}
        isChecked={colorMode === 'light'} />

      <Button onClick={() => modeHandler('light')}
        pr={0}
        variant={'ghost'} size='md' paddingRight={0}>
        <SunIcon fontSize={colorMode === 'light' && '1.5rem'} />
      </Button>

    </Flex>
  )
}