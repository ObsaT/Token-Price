import Head from 'next/head'
import { useEffect } from 'react'
import BitCoin from '../components/bitcoin/BitCoin'
import {useDispatch } from 'react-redux'
import { getCoin } from '../store/slices/CoinSlice'
export default function Home() {
  return (
      <div style={{marginTop:80}}>
        <BitCoin/>
      </div>
  )
}
