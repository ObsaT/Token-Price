import { getCoin, priceData, selectCoin } from '../../store/slices/CoinSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import styles from '../../styles/bitcoin.module.scss'
import { Select } from 'semantic-ui-react'
import LoaderComponent from '../ui/LoaderComponent';
const currencyOPtion = [
  { key: 'USD', value: 'USD', text: 'USD' },
  { key: 'EUR', value: 'EUR', text: 'EUR' },
  { key: 'GBP', value: 'GBP', text: 'GBP' },
]
const BitCoin = () => {
  var interval = null;
  const despatch = useDispatch();
  const coin = useSelector(selectCoin);
  const [currency, setCurrency] = useState('USD')
  useEffect(() => {
    despatch(getCoin(currency))
  }, [currency])
  const handleSelectedValue = (e, data) => {
    setCurrency(data.value)
    despatch(getCoin(currency))
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.selection}>
            <div>
              <h1>{currency}</h1>
            </div>
            <div>
              <Select placeholder={currency} options={currencyOPtion} onChange = {handleSelectedValue}/>
            </div>
          </div>
           <div className={styles.priceData}>
            <div style={{display:'flex', position:'absolute', marginTop:'70'}}>
                  {coin.status === true ? <LoaderComponent/> :
                    <h1>{coin.priceData}</h1>
                  }
            </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default BitCoin