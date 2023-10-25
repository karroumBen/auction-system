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
import { placeBid } from "../services/customer";

const BidingDialog = ({ closeModal, startingPrice, id }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [bidPlaced, setBidPlaced] = useState({ startingPrice, id});
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCloseModal = () => {
    onClose();
    closeModal();
  }

  const handleInputChange = (e) => {
    setBidPlaced({...bidPlaced, [e.target.name]: e.target.value})
  }

  const handleFormSubmition = (e) => {
    e.preventDefault();
    console.log(bidPlaced);
    setIsLoading(true);

    placeBid(bidPlaced).then(({ data }) => {
      toast({
        title: 'Yuupii',
        description: "Successfully done",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      });

      handleCloseModal();
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
          <ModalHeader>New Bid</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Starting price</FormLabel>
              <Input
                type="number"
                name="startingPrice"
                isRequired
                value={bidPlaced.startingPrice}
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


export default BidingDialog;