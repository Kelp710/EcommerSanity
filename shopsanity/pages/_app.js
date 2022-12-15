import React from 'react'
import '../styles/globals.css'
import{Layout} from '../components'
import { StateContext } from '../context'
import {Toaster} from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return( 
    <StateContext.consumer>
  <Layout>
    <Toast/>
   <Component {...pageProps} />
  </Layout>
  </StateContext.consumer>
  )
  
}

export default MyApp
