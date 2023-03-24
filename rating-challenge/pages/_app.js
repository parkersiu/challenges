import '../styles.css'
import RatingCard from './index'
import { Overpass } from 'next/font/google'

const overpass = Overpass({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
     html {
      font-family: ${overpass.style.fontFamily};
     }
     `}</style>
      <RatingCard {...pageProps} />
    </>
  )
}
