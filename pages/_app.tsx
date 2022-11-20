import { Goldman } from '@next/font/google'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const fontFamily = Goldman({ weight: '400' })


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontFamily.style.fontFamily};
        }
        body {
          font-family: ${fontFamily.style.fontFamily};
        }
        textarea {
          font-family: ${fontFamily.style.fontFamily};
        }
        input {
          font-family: ${fontFamily.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
