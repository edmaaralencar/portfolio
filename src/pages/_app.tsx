import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import Header from '../components/Header'
// import SocialMedia from '../components/SocialMedia'

import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default MyApp
