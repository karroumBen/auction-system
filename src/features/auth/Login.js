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
  useToast,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { login } from '../../store/auth/actions';
import { setUser } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [credentials, setCredentials] = useState({ email: '', password: ''});

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(credentials);
    setIsLoading(true);
    login(credentials).then(({ data }) => {
      const { accessToken, email, name, seller} = data;
      if(accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }
      dispatch(setUser({ accessToken, email, name, isSeller: seller, isAuthenticated: true }));

      toast({
        title: 'Hura',
        description: "Successfully logged in",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      })

      return seller
    })
    .then((seller) => {
      navigate(seller? '/sellers': '/customers')
    }).catch((error) => {
      toast({
        title: 'Ooopsie!',
        description: "Something went wrong, please do not freak out",
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      })
    })
    .finally(() => {
      setIsLoading(false);
    })
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
                  isRequired
                  value={credentials.email}
                  onChange={handleInputChange}/>
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  isRequired
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </FormControl>

              <Stack spacing={10} mt={5}>

                <Button
                  size={'lg'}
                  onClick={handleLogin} 
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isLoading={isLoading}
                  loadingText='in progress'
                  colorScheme='blue'
                  variant='outline'
                  spinnerPlacement='end'>
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