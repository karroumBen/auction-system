import { CheckCircleIcon, DeleteIcon, EditIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, Image, ListIcon, Tag, Text, Tooltip, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { deleteProduct, publishProduct } from '../services/seller';

const SellerItem = ({ product, openForEdit, reloadItems }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const {
    id,
    name,
    description,
    quantity,
    imageLink,
    bidDueDate,
    startingPrice,
    status,
    paymentDueDate } = product;

  const onEdit = () => openForEdit(product);
  const onPublish = () => {
    setIsLoading(true);

    publishProduct(id).then(({ data }) => {
      toast({
        title: 'Yuupii',
        description: "Successfully done",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      });

      reloadItems();
    }).catch((error) => {
      toast({
        title: 'Ooopsie!',
        description: "Something went wrong, We got your back",
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      })
    })
    .finally(() => {
      setIsLoading(false);
    });
  };
  const onDelete = () => {
    setIsLoading(true);

    deleteProduct(id).then(({ data }) => {
      toast({
        title: 'Yuupii',
        description: "Successfully done",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      });

      reloadItems();
    }).catch((error) => {
      toast({
        title: 'Ooopsie!',
        description: "Something went wrong, We got your back",
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      })
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  const getColor = (status) => {
    const statusColor = {
      'PENDING': 'gray.500',
      'OPEN': 'blue.300',
      'CLOSED': 'red.300',
      'PAID': 'teal.300',
    }

    return statusColor[status];
  }
  return (
    <Flex
      border="1px"
      borderColor="gray.300"
      p="3"
      rounded="md"
      shadow="md"
      mb="3"
      direction="row"
      alignItems="center"
    >
      {/* First Section - Image */}
      <Box flex="1">
        <Image
          src={imageLink}
          alt="bid-logo"
          rounded="lg"
          height={65}
          width={65}
          objectFit="cover"
        />
      </Box>

      {/* Second Section - Details */}
      <Box flex="3" pr="4">
        <Text fontSize="xl" fontWeight="semibold">
          {name}
        </Text>
        <Text fontSize="md" color="gray.600">
          {description}
        </Text>
        <HStack spacing="2" mt="2">
          <Text fontSize="sm">
            <strong>Quantity:</strong> {quantity} <CheckCircleIcon name="check" color="green.400" />
          </Text>
          <Text fontSize="sm">
            <strong>Bid Due Date:</strong> {new Date(bidDueDate).toLocaleDateString()}
          </Text>
          <Text fontSize="sm">
            <strong>Starting Price:</strong> ${startingPrice.toFixed(2)}
          </Text>
          <Text fontSize="sm">
            <strong>Status:</strong>
            <Tag variant='solid' bg={getColor(status)}>
              {status}
            </Tag> 
          </Text>
          <Text fontSize="sm">
            <strong>Payment Due Date:</strong> {new Date(paymentDueDate).toLocaleDateString()}
          </Text>
        </HStack>
      </Box>

      {/* Third Section - Buttons with Icons and Texts in the Same Line */}
      <Box flex="1" display="flex" flexDirection="column" justifyContent="space-between">

        <HStack spacing="2" justifyContent="flex-end">

        <Tooltip hasArrow label='Publish' fontSize='md'>
          <IconButton
            colorScheme="blue"
            aria-label="Edit"
            icon={<UnlockIcon />}
            onClick={onPublish}
            isDisabled={status !== 'PENDING'}
          >
            Publish
          </IconButton>
        </Tooltip>

        <Tooltip hasArrow label='Edit item' fontSize='md'>
          <IconButton
            colorScheme="teal"
            aria-label="Edit"
            icon={<EditIcon />}
            onClick={onEdit}
            isDisabled={status === 'PENDING'}
          >
            Edit
          </IconButton>
        </Tooltip>
      
        <Tooltip hasArrow label='Delete item' fontSize='md'>
          <IconButton
            isLoading={isLoading}
            colorScheme="red"
            aria-label="Delete"
            icon={<DeleteIcon />}
            onClick={onDelete}
          >
            Delete
          </IconButton>
        </Tooltip>
        </HStack>
      </Box>
    </Flex>
  )
}

export default SellerItem