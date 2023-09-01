import { useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function StyleColorMode() {

  // Меняет тему и записываетее в localStorage в 'chakra-ui-color-mode'
  const { colorMode, toggleColorMode } = useColorMode()

  return (

    <Button onClick={toggleColorMode} variant={'ghost'} size='md' _hover={'none'}>
      {colorMode === 'light' ? <MoonIcon color={'#e2e8f0'} hover={'none'} /> : <SunIcon hover={'none'} />}
    </Button>
  )
}