import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.data = action.payload;
    },
  },
})

export const { setProductData } = productSlice.actions

export default productSlice.reducer