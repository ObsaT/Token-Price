// import { createAsyncThunk } from "@reduxjs/toolkit"
// export const getBitcoin = createAsyncThunk('coin/getCoin', async () => {
//     return fetch('(https://api.coindesk.com/v1/bpi/currentprice.json').then(response => {
//         response.json;
//     })
// })
import axios from 'axios';

export const bitcoinApi = {
    getBitcoin : () => {
    return axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
    }
}