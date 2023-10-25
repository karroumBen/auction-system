import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import productReducer from './product';
import bidingReducer from './biding';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    bidingItem: bidingReducer,
  },
})