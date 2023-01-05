import Head from 'next/head'
import Layout from '../components/Layout'
import './styles.css'

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to website!</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  )
}
export default CustomApp
