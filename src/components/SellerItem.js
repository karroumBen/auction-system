import { Button, Image, Stack } from '@chakra-ui/react'
import React from 'react'

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'


const SellerItem = () => {
  return (
    <article className="seller-item">
        <div className="item-image">
          <Image
              rounded={'lg'}
              height={65}
              width={65}
              objectFit={'cover'}
              src={IMAGE}
              alt="bid-logo"
            />
        </div>

        <div className="item-details">
          <h3>Chair with 3 legs</h3>
          <p>$500</p>
        </div>

        <div className="item-actions">
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button bg={'blue.400'} as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}
            _hover={{
              bg: 'blue.300',
            }}
            color={'white'}
            >
              Edit
            </Button>

            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'red.400'}
              href={'#'}
              _hover={{
                bg: 'red.300',
              }}>
              delete
            </Button>
          </Stack>
        </div>
      </article>
  )
}

export default SellerItem