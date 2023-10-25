import React, { useEffect, useState } from 'react'
import SellerItem from '../../components/SellerItem'
import ListNavBar from '../../components/ListNavBar';
import NewProduct from '../../components/NewProduct';
import { getSellerProducts } from '../../services/seller';

const SellerPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleModal = () => {
    setIsVisible(true);
  }
  const closeModal = () => {
    setIsVisible(false);
  }

  const fetchProducts = () => {
    getSellerProducts()
      .then(({data}) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(fetchProducts, []);
  return (
    <>
      <section>
        <ListNavBar title="Seller's products" handleModel={handleModal}/>
      </section>


      <section className='seller-items'>
        <SellerItem />
        <SellerItem />
      </section>

      { isVisible && <NewProduct closeModal={closeModal}/>}
    </>
  )
}

export default SellerPage;