import React, { useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input, InputGroup, InputRightElement, Button, Stack, Center,
} from '@chakra-ui/react';

export default function SignUpForm({ isSelected }) {
  console.log('SignUp is mounted');

  const [show, setShow] = React.useState(false);
  const nameRef = React.useRef(null);
  const handleClick = () => setShow(!show);

  useEffect(() => {
      setTimeout(() => {
        nameRef.current.focus();
      }, 300);
  }, []);


  return (
    <Stack direction="column" spacing="20px" mb="2rem">
      <FormControl w="80%" m="auto">
        <FormLabel>Ваше Имя</FormLabel>
        <InputGroup size="md">
          <Input
            name=''
            ref={nameRef}
            pr="4.5rem"
            type="text"
            placeholder="Enter name"
          />
        </InputGroup>
      </FormControl>

      <FormControl w="80%" m="auto">
        <FormLabel>Email</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="email"
            placeholder="Enter email"
          />
        </InputGroup>
      </FormControl>

      <FormControl w="80%" m="auto">
        <FormLabel>Пароль</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
        </InputGroup>
      </FormControl>

      <FormControl w="80%" m="auto">
        <FormLabel>Подвердите Пароль</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Confirm password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Center>
        <Button color="green.400" borderColor="green.500" variant="outline">Отправить</Button>
      </Center>
    </Stack>
  );
}
