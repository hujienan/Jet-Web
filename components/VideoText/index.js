export default function VideoText() {
  return (
    <div className="flex justify-center flex-col min-h-screen text-center text-6xl sm:text-8xl lg:text-9xl font-bold">
      <div className="relative overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full top-0 left-0 object-cover object-center border border-white" >
          <source src="https://uploads-ssl.webflow.com/61029a9e5385f704c8f71cbb/6114e997b7b7733955da822a_WhaleIVideo-transcode.mp4" type="video/mp4"></source>
        </video>
        <h2 className="mix-blend-screen bg-white">Hello World</h2>
        <h2 className="mix-blend-screen bg-white -mt-px">您好 世界</h2>
      </div>
    </div>
  )
}