import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const bidingSlice = createSlice({
  name: 'bidingItem',
  initialState,
  reducers: {
    setBidingData: (state, action) => {
      state.data = action.payload;
    },
  },
})

export const { setBidingData } = bidingSlice.actions

export default bidingSlice.reducer