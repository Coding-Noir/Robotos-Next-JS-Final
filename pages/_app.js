import Head from "next/head"
import Layout from "../components/Layout"
import "../styles/app.scss"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
