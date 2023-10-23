import axios from 'axios';

export const login = (credentials) => {
  return axios.post('/auth/login', credentials);
}

export const register = (userDetails) => {
  const { userType } = userDetails;
  const destination = userType === 'customer' ? 'customer' : 'seller'

  return axios.post(`/${destination}/register`, userDetails);
}