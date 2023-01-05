import Head from 'next/head'
import Script from 'next/head'
import '../public/assets/css/style.css'
import '../public/assets/css/green.css'
function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Page Needs */}
        <title>Portal — Address Data</title>
        <meta
          name="description"
          content="Deploy, configure and hyper-accurate Nigeria Address Validation Tool."
        />
        <meta name="founder" content="Abdulhaqq Sule, writeme@abdulhaqqsule.com" />
        <meta name="contributors" content="https://addressdata.ng/contributors" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {/* Favicon */}
        <link
          rel="shortcut icon"
          href="../public/assets/favicon.png"
          type="image/x-icon"
        />

      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default CustomApp
