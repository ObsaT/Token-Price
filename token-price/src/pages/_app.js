import '../styles/globals.scss'
import {Provider} from 'react-redux'
import {Store} from '../store/store'
import 'semantic-ui-css/semantic.min.css'
import Header from '../components/ui/Header'
function MyApp({ Component, pageProps }) {
  return (
  <>
   <Provider store = {Store}>
    <Header/>
    <Component {...pageProps} />
   </Provider>
   </>
    )
}

export default MyApp
