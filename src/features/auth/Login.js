import React, { useState } from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: ''});

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  const handleInputChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <ChakraProvider>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
    
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}/>
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                </Stack>

                <Button
                  onClick={handleLogin} 
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>

              <Text fontSize={'md'} color={'gray.600'}>
                Don't have an account? &nbsp;
                <Link href='/register' color={'blue.400'}>
                  Register <ExternalLinkIcon mx='2px' />
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  )
}

export default Login;