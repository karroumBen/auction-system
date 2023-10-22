import React from 'react'
import BidingItem from './BidingItem';

const BidingList = () => {
  return (
    <>
      <section>
        <h2>Biding List</h2>
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