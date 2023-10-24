import React from 'react'
import SellerItem from '../../components/SellerItem'
import ListNavBar from '../../components/ListNavBar';

const index = () => {
  return (
    <>
    <section>
      <ListNavBar title="Seller's products"/>
    </section>

    <section className='seller-items'>
      <SellerItem />

      <SellerItem />
      <SellerItem />
      <SellerItem />
      <SellerItem />
      <SellerItem />
      <SellerItem />
      <SellerItem />
      
    </section>
    </>
  )
}

export default index