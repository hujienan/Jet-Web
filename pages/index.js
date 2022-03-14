import Head from 'next/head'
import Script from 'next/script'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import VideoText from '../components/VideoText'
export default function Home() {
  return (
    <>
      <Head>
        <title>Know It - Jet Hu - Write Code and Poem</title>
        <meta name="description" content="Know It is one of Jet Hu's web projects, it is a place to let people know who Jet Hu is and what he is doing">
        </meta>
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.TRACKING_ID}`}
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.TRACKING_ID});
        `}
      </Script>
      <Heading></Heading>
      <VideoText></VideoText>
      <Footer></Footer>
    </>
  )
}
