import axios from 'axios';

export const bitcoinApi = {
    getBitcoin : () => {
     return axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
    }
}