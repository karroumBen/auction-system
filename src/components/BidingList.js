import React from 'react'
import BidingItem from './BidingItem';
import ListNavBar from './ListNavBar';

const BidingList = () => {
  return (
    <>
      <section>
        <ListNavBar title="Biding items"/>
      </section>

      <section className='biding-list'>
        <BidingItem />

        <BidingItem />

        <BidingItem />

        <BidingItem />

        <BidingItem />

        <BidingItem />

        <BidingItem />
      </section>
    </>
  )
}

export default BidingList