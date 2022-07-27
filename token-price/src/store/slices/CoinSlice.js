import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {bitcoinApi} from '../../pages/api/bitcoinApi'
import axios from 'axios';
export const getCoin = createAsyncThunk('coin/getCoinAsync', async (currency) => {
   let data = null;
   try {
   await bitcoinApi.getBitcoin().then(res => {
        data = res.data.bpi[currency].rate;
    });
   } catch (error) {
   }
 return data;
});
const CoinSlice = createSlice({
    name: 'coin',
    initialState: {
     coin: null,
     status: null,
     priceData: null
    },
    extraReducers : (builder => {
        builder.addCase(getCoin.pending, (state, action) =>{
            state.status = true;
        });
        builder.addCase(getCoin.fulfilled, (state, action) =>{
            if (action.payload !== null) {
            state.priceData = action.payload;
            state.status = "success";
            }
        });
        builder.addCase(getCoin.rejected, (state, action) =>{
            state.status = true;
            state.status = "failed";
        })
    })
})
export const selectCoin = ({coin}) => coin
export default CoinSlice.reducer