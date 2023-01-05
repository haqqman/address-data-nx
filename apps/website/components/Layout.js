import Header from './Header'
import Footer from './Footer'
// import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout