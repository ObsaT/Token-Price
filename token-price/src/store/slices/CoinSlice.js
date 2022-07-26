import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {bitcoinApi} from '../../pages/api/bitcoinApi'
import axios from 'axios';
export const getCoin = createAsyncThunk('coin/getCoinAsync', async (currency) => {
   let data = null;
   try {
   await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`).then(res => {
    bitcoinApi.getBitcoin().then(response => {
        console.log(response);
    })
        data = res.data.bpi[currency].rate;
        console.log(currency);
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