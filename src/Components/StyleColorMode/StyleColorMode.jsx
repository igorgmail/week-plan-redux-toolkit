import { useColorMode } from '@chakra-ui/react'
import { Button, HStack, Switch } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


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

    // <Button onClick={toggleColorMode} variant={'ghost'} size='md' _hover={false} pl={0}>
    //   {colorMode === 'light' ? <MoonIcon _hover={false} /> : <SunIcon _hover={false} />}
    // </Button>
    <HStack>

      <Button onClick={() => modeHandler('dark')} variant={'ghost'} size='md' _hover={false} pl={0}>
        <MoonIcon _hover={false} fontSize={colorMode === 'dark' && '1.5rem'} /> 
    </Button>
      <Switch size='md' onChange={switchHandler} isChecked={colorMode === 'light'} />
      <Button onClick={() => modeHandler('light')} variant={'ghost'} size='md' _hover={false} pl={0}>
        <SunIcon _hover={false} fontSize={colorMode === 'light' && '1.5rem'} />
      </Button>
    </HStack>
  )
}