import React, { useEffect, useState } from 'react'
import SellerItem from '../../components/SellerItem'
import ListNavBar from '../../components/ListNavBar';
import NewProduct from '../../components/NewProductModal';
import { getSellerProducts } from '../../services/seller';
import { setProductData } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import { take } from 'lodash';

const SellerPage = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState({});
  const products = useSelector(state => state.product.data);
  const handleModal = () => {
    setIsVisible(true);
  }

  const openForEdit = (product) => {
    setIsVisible(true);
    setEditedProduct(product);
  }
  const closeModal = () => {
    setIsVisible(false);
  }

  const paginate = (itemsPerPage) => {
    const temp = take(products, itemsPerPage);
    console.log('temp ', temp);
    setDisplayedProducts(temp);
  }

  const fetchProducts = () => {
    getSellerProducts()
      .then(({data}) => {
        dispatch(setProductData(data));
        paginate(5);
      })
      .then(() => {
        setTimeout(() => {
          paginate(5);
        }, 1000)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(fetchProducts, []);

  return (
    <>
      <section>
        <ListNavBar
          title="Seller's products"
          handleModel={handleModal}
          paginate={paginate}
        />
      </section>


      <section className='seller-items'>
        {
          products.map(product => <SellerItem
            key={product.id}
            product={product}
            openForEdit={openForEdit}
            reloadItems={fetchProducts} />)
        }
      </section>

      { isVisible && <NewProduct editedProduct={editedProduct} closeModal={closeModal} reloadItems={fetchProducts}/>}
    </>
  )
}

export default SellerPage;