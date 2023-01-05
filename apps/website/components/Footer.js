import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer-section">
      {/*footer top start*/}
      <div className="footer-top gradient-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="footer-nav-wrap text-white mb-0 mb-md-4 mb-lg-0">
                <Link className="d-block" to="/">
                  <Image
                    src="assets/images/logo-light.svg"
                    alt="footer logo"
                    className="img-fluid mb-1"
                  />
                </Link>
                <p>Efficient Nigerian address validation.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
              <div className="footer-nav-wrap text-white">
                <ul className="list-unstyled footer-nav-list mt-3">
                  <li>
                    <Link to="/index">About</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/documentation">Documentation</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
              <div className="footer-nav-wrap text-white">
                <ul className="list-unstyled footer-nav-list mt-3">
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="footer-nav-wrap text-white">
                <h5 className="text-light footer-head">Create account</h5>
                <form action="#" className="creator-form mt-3">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required=""
                    />
                    <div className="input-group-append">
                      <button
                        className="btn solid-btn creator-btn btn-hover"
                        type="submit"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*footer top end*/}
      {/*footer copyright start*/}
      <div className="footer-bottom gray-light-bg py-3">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-md-6 col-lg-5">
              <p className="copyright-text pb-0 mb-0">
                © Made with <span className="ti-heart color-7" /> by{' '}
                <b>
                  <Link to="https://haqqman.agency/sitecredit">Haqqman</Link>
                </b>
              </p>
              <b></b>
            </div>
            <b></b>
          </div>
          <b></b>
        </div>
        <b></b>
      </div>
      <b>{/*footer copyright end*/}</b>
    </div>
  )
}

export default Footer
