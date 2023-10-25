import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { addProduct } from "../services/seller";

const NewProduct = ({ closeModal, reloadItems, editedProduct }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: '',
    description: '',
    startingPrice: 0,
    bidDueDate: '',
    paymentDueDate: '',
    imageLink: '',
    quantity: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCloseModal = () => {
    onClose();
    closeModal();
  }

  const handleInputChange = (e) => {
    setProductDetails({...productDetails, [e.target.name]: e.target.value})
  }

  const handleFormSubmition = (e) => {
    e.preventDefault();
    console.log(productDetails);
    setIsLoading(true);

    addProduct(productDetails).then(({ data }) => {
      console.log(data);
      toast({
        title: 'Yuupii',
        description: "Successfully done",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      });

      handleCloseModal();
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
  }

  useEffect(() => {
    onOpen();
    if(editedProduct) {
      setProductDetails(editedProduct);
    }
  }, [])

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={handleCloseModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="P-1001"
                name="name"
                isRequired
                value={productDetails.name}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                placeholder="Product description"
                name="description"
                isRequired
                value={productDetails.description}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Starting price</FormLabel>
              <Input
                type="number"
                name="startingPrice"
                isRequired
                value={productDetails.startingPrice}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                name="quantity"
                isRequired
                value={productDetails.quantity}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Bid Due date</FormLabel>
              <Input
                type="date"
                name="bidDueDate"
                isRequired
                value={productDetails.bidDueDate}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Payment Due Date</FormLabel>
              <Input
                type="date"
                name="paymentDueDate"
                isRequired
                value={productDetails.paymentDueDate}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input
                type="text"
                placeholder="https://test.com/imagelink"
                name="imageLink"
                isRequired
                value={productDetails.imageLink}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={handleFormSubmition}
              isLoading={isLoading}
            >
              Save
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


export default NewProduct;