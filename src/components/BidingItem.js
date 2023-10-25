'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

export default function BidingItem() {
  const navigate = useNavigate();

  const displayDetails = () => {
    navigate('/items/1');
  }

  return (
    <Center>
      <Box
        role={'group'}
        p={4}
        maxW={'250px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={0}>
        <Box
          rounded={'lg'}
          pos={'relative'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={180}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
          />
        </Box>
        <Stack pt={2} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>

          <Stack mt={4} direction={'row'} spacing={4}>
          <Button
            onClick={displayDetails}
            flex={6}
            fontSize={'sm'}
            rounded={'md'}
            _focus={{
              bg: 'gray.200',
            }}>
            View
          </Button>

            <Button
              flex={6}
              fontSize={'sm'}
              rounded={'md'}
              bg={'teal.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'teal.500',
              }}
              _focus={{
                bg: 'teal.500',
              }}>
              Bid
            </Button>
        </Stack>
        </Stack>
      </Box>
    </Center>
  )
}