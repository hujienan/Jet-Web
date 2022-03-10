import Layout from "../components/layout";

export default function Bg() {
  return (
    <Layout>
      <div className="bg-green-500">
        <h1 className="bg-white text-5xl">hello</h1>
        <h1 className="bg-white text-5xl -m-px">world</h1>
      </div>
    </Layout>
  )
}