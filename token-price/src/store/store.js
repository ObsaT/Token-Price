
import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './slices/CoinSlice';
 
export const Store = configureStore({
    reducer: {
      coin: coinReducer
    }
})
 