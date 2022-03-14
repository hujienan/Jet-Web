import Head from 'next/head'
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
      <Heading></Heading>
      <VideoText></VideoText>
      <Footer></Footer>
    </>
  )
}
