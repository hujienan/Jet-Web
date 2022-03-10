import Layout from "../components/layout";
import styles from "../styles/Video.module.scss";

export default function Video() {
  return (
    <Layout>
      <div className={`flex justify-center flex-col min-h-screen text-center`}>
        <div className={`relative overflow-hidden`}>
          <video autoPlay muted loop playsInline className={`absolute w-full h-full top-0 left-0 object-cover object-center border border-white`} >
            <source src="https://uploads-ssl.webflow.com/61029a9e5385f704c8f71cbb/6114e997b7b7733955da822a_WhaleIVideo-transcode.mp4" type="video/mp4"></source>
          </video>
          <h2 className="mix-blend-screen font-extrabold text-5xl sm:text-8xl bg-white">Hello World</h2>
          <h2 className="mix-blend-screen font-extrabold text-5xl sm:text-8xl bg-white -mt-px">您好 世界</h2>
        </div>
      </div>
    </Layout>
  )
}