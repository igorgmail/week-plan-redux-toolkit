import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import {
  Stack, Center, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, HStack,
} from '@chakra-ui/react';


import { setName } from '../../store/slices/configSlice';

export default function SignInPage({ setShowSpinner }) {
  console.log('Auth is mounted');

  const [show, setShow] = useState(false);


  const emailRef = useRef(null);
  const handleClick = () => setShow(!show);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { sinEmail: event.target.sinEmail.value, sinPassword: event.target.sinPassword.value };

    console.log("▶ ⇛ data:", data);
    try {
      const response = await fetch('http://localhost:3100/api/user/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Включить передачу куки
        timeout: 30000,
        SameSite: 'none',
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.status === 200 && result.userName) {
        setName(result.name)
        // navigate('/home');
      }
    } catch (error) {
      console.log('error in login', error);
    }
  };

  useEffect(() => {
      setTimeout(() => {
        emailRef.current.focus();
      }, 200);
  }, []);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing="24px">
          <FormControl w="80%" m="auto">
            <FormLabel>Email</FormLabel>
            <InputGroup size="md">
              <Input
                ref={emailRef}
                name="sinEmail"
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
                name="sinPassword"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>

          </FormControl>
          <Center>
            <Button
              type="submit"
              color="#008075"
              borderColor="green.500"
              variant="outline"
            >
              Отправить
            </Button>
          </Center>
        </Stack>

      </form>
      <Stack direction="column" spacing="24px">
        <Center mt="2rem">
          Войти с помощью
        </Center>
        <Center>
          <HStack spacing="2rem" mb="1rem">
            <Button variant="unstyled">
              <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 186.69 190.5">
                <g transform="translate(1184.583 765.171)">
                  <path clipPath="none" mask="none" d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" fill="#4285f4" />
                  <path clipPath="none" mask="none" d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z" fill="#34a853" />
                  <path clipPath="none" mask="none" d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z" fill="#fbbc05" />
                  <path d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z" fill="#ea4335" clipPath="none" mask="none" />
                </g>
              </svg>
            </Button>
            {/* <Button variant="unstyled">
              <svg width="2rem" height="2rem" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z" fill="#0077FF" />
                <path d="M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8 27.6401 21 28.4401V14.6001H26.1602V22.5001C29.3202 22.1601 32.6398 18.5601 33.7598 14.6001H38.9199C38.0599 19.4801 34.4599 23.0801 31.8999 24.5601C34.4599 25.7601 38.5601 28.9001 40.1201 34.5801H34.4399C33.2199 30.7801 30.1802 27.8401 26.1602 27.4401V34.5801H25.54Z" fill="white" />
              </svg>
            </Button> */}
          </HStack>
        </Center>
      </Stack>
    </>
  );
}
