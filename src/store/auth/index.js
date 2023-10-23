import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'Karim',
    email: 'karim@test.com',
    token: '12341',
    isSeller: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {...state, ...action.payload};
    },
  },
})

export const { setUser } = authSlice.actions

export default authSlice.reducer