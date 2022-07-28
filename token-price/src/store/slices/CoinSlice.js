import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {bitcoinApi} from '../../pages/api/bitcoinApi'
export const getCoin = createAsyncThunk('coin/getCoinAsync', async ( ) => {
   let data = null;
   try {
   await bitcoinApi.getBitcoin().then(res => {
        data = res.data;
    });
   } catch (error) {
   } 
 return data;
});
const CoinSlice = createSlice({
    name: 'coin',
    initialState: {
     status: null,
     price: null
    },
    extraReducers : (builder => {
        builder.addCase(getCoin.pending, (state, action) =>{
            state.status = true;
        });
        builder.addCase(getCoin.fulfilled, (state, action) =>{
            if (action.payload !== null) {
            state.price = action.payload;
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