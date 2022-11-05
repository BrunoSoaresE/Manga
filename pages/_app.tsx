import type { AppProps } from 'next/app'
import Script from 'next/script'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <Script
      src="../public\vanilla-tilt.js"
      strategy="beforeInteractive"
      onLoad={() => {
        console.log('Script has loaded')
      }}
    />


    <Component {...pageProps} /> </>
}