import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Select,
  IconButton,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

const ListNavBar = ({ title, handleModel }) => {
  const auth = useSelector(state => state.auth);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      boxShadow="sm"
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
    >
      <Text flex={1} fontSize="xl">{title}</Text>

      <Box display="flex" alignItems="center" flex={2}>
        <Flex align="center" justify="space-between" flex={1}>
          <InputGroup display="flex" gap={'10px'}>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon name="search" color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search..."
              size="md"
            />
            <Button
              size="md"
              onClick={() => {
                // Add your search logic here
              }}
            >
              Search
            </Button>
          </InputGroup>


          <Flex>
            <IconButton
              ml="4"
              size="sm"
              aria-label="Previous Page"
              icon={<ChevronLeftIcon />}
              onClick={() => {
                // Handle previous page
              }}
            />

            <Select
              mx="4"
              size="sm"
              value={10}
              onChange={(e) => {
                // Handle the change in the number of items per page
              }}
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={25}>25</option>
            </Select>

            <IconButton
              size="sm"
              aria-label="Next Page"
              icon={<ChevronRightIcon />}
              onClick={() => {
                // Handle next page
              }}
            />

          </Flex>
          {
            auth.isSeller && 
            <Button
              px={6}
              ml={10}
              colorScheme="green"
              size={"md"}
              onClick={handleModel}
            >
              Create new
            </Button>
          }
        </Flex>
      </Box>
    </Flex>
  );
};

export default ListNavBar;
