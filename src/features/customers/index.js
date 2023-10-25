import React, { useEffect, useState } from 'react'
import { getBiddingItems } from '../../services/customer';
import ListNavBar from '../../components/ListNavBar';
import BidingItem from '../../components/BidingItem';
import { useDispatch, useSelector } from 'react-redux';
import { take } from 'lodash';
import { setBidingData } from '../../store/biding';

const CustomerPage= () => {
  const dispatch = useDispatch();
  const [displayedBids, setDisplayedBid] = useState([]);
  const bids = useSelector(state => state.bidingItem.data);

  const paginate = (itemsPerPage) => {
    console.log(typeof itemsPerPage)
    const temp = take(bids, itemsPerPage);
    setDisplayedBid(temp);
  }

  const fetchProducts = () => {
    getBiddingItems()
      .then(({data}) => {
        dispatch(setBidingData(data));
      })
      .then(() => {
        paginate(5);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(fetchProducts, []);
  return (
    <div>
      <section>
        <ListNavBar
          title="Biding items"
          paginate={paginate}
        />
      </section>

      <section className='biding-list'>
        {
          bids.map(bid => <BidingItem key={bid.id} bid={bid} />)
        }
      </section>
    </div>
  )
}

export default CustomerPage