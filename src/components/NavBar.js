'use client'

import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useDisclosure,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import LOGO from '../assets/images/bid.png';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../store/auth';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const auth  = useSelector((state) => state.auth);
  const logout = () => {
    localStorage.removeItem('accessToken');
    dispatch(resetUser());
  }
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            rounded={'lg'}
            height={'40px'}
            width={'40px'}
            objectFit={'cover'}
            src={LOGO}
            alt="bid-logo"
          />
        </Flex>


        { auth.isAuthenticated ?
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'/login'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'teal.400'}
              href={'/register'}
              _hover={{
                bg: 'teal.300',
              }}>
              Sign Up
            </Button>
          </Stack>
          :
          <Menu>
            <MenuButton as={Button} colorScheme='pink'>
              { auth.name }
            </MenuButton>
            <MenuList>
              <MenuGroup title='Profile'>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Favorite list </MenuItem>
              </MenuGroup>
              <MenuDivider />

              <MenuGroup>
                <MenuItem as='button' onClick={logout}>Log out</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        }
      </Flex>
    </Box>
  )
}