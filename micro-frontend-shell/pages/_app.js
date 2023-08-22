import Nav from '../components/nav'
import '../styles/globals.css'
import '../public/global.css';

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
