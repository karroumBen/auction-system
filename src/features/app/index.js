import { Box, Center, Heading, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import BidingItem from '../../components/BidingItem';


const index = () => {
    return (
        <section className="home-page">
          <Heading fontSize='2xl' mb={2}>
            Biding items
          </Heading>


          <Wrap spacing='15px'>
            <WrapItem>
              <BidingItem />
            </WrapItem>
            <WrapItem>
              <BidingItem />
            </WrapItem>
            <WrapItem>
              <BidingItem />
            </WrapItem>
            <WrapItem>
              <BidingItem />
            </WrapItem>

            <WrapItem>
              <BidingItem />
            </WrapItem>

            <WrapItem>
              <BidingItem />
            </WrapItem>

            <WrapItem>
              <BidingItem />
            </WrapItem>
            <WrapItem>
              <BidingItem />
            </WrapItem>
            <WrapItem>
              <BidingItem />
            </WrapItem>
          </Wrap>
        </section>
    )
}

export default index