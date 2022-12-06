import '../styles/globals.css'
import * as ga from '../lib/ga'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as ReactGA from 'react-ga'

ReactGA.initialize('UA-158830260-1')

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    // Track the page view with react-ga when the component mounts
    ReactGA.pageview(window.location.pathname)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
