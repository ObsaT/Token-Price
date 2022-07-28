import { getCoin, selectCoin } from '../../store/slices/CoinSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/bitcoin.module.scss'
const BitCoin = () => {
  const despatch = useDispatch();
  const priceData = useSelector(selectCoin);
  const [currency, setCurrency] = useState('USD');
  useEffect(() => {
    despatch(getCoin())
    setInterval(() => { despatch(getCoin()) }, 5000)
  }, [currency])
  const handleSelectedValue = (e) => {
    setCurrency(e.target.value)
    despatch(getCoin(currency))
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.selection}>
            <div>
              <span>{priceData.price?.bpi[currency]?.description}</span>
            </div>
            <span className={styles.content}>
            </span>
            <select style={{ width: 60, height: 30, borderRadius: 5, fontWeight: 'bold', fontFamily: 'sans-serif' }} onChange={handleSelectedValue}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <div className={styles.priceData}>
            <div style={{ display: 'flex', marginTop: '70', flexDirection: 'column' }}>
              <h1>
                {
                currency === 'USD' && <small>&#36;</small> 
                || currency === 'EUR' && <small>&euro;</small> 
                || currency === 'GBP' && <small>&pound;</small> }
                {priceData.price?.bpi[currency]?.rate}
              </h1>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <small>Updated on: <span style={{ color: 'red' }}>{priceData.price?.time?.updated}</span> </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BitCoin