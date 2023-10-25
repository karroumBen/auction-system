import axios from 'axios';

export const login = (credentials) => {
  return axios.post('/auth/login', credentials);
}

export const register = (userDetails) => {
  const { userType } = userDetails
  console.log()
  const destination = userType === 'customer' ? 'customer' : 'seller'

  return axios.post(`/register/${destination}`, userDetails);
}