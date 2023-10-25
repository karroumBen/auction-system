import axios from 'axios';

export const getBiddingItems = () => {
  return axios.get('/products/customer');
}

export const placeBid = (payload) => {
  const { id, price } = payload;
  return axios.post(`/bidding/addbid/${id}/${price}`);
}

