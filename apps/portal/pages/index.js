export function Index() {
  return (
    <>
{/* Start Title Bar */}
  <div id="titlebar" className="gradient">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Address Data Portal</h2>
          <span>Integrate or Contribute to Address Data</span>
          {/* Breadcrumbs */}
          <nav id="breadcrumbs" className="white">
            <ul>
              <li>
                <a href="#">Portal</a>
              </li>
              <li>Log In</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* End Title Bar */}
  {/* Start Authentication */}
  <div className="container">
    <div className="row">
      <div className="col-xl-4 offset-xl-4">
        <div className="login-register-page">
          {/* Welcome Text */}
          <div className="welcome-text">
            <h3>Log In</h3>
          </div>
          {/* Form */}
          <form method="post" id="login-form">
            <div className="input-with-icon-left">
              <i className="icon-feather-user" />
              <input
                type="email"
                className="input-text with-border"
                name="email-address"
                id="email-address"
                placeholder="eMail Address"
                required=""
              />
            </div>
            <div className="input-with-icon-left">
              <i className="icon-material-outline-lock" />
              <input
                type="password"
                className="input-text with-border"
                name="password"
                id="password"
                placeholder="Password"
                required=""
              />
            </div>
            <a href="#" className="forgot-password">
              <center>Reset Password</center>
            </a>
          </form>
          {/* Button */}
          <button
            className="button full-width button-sliding-icon ripple-effect margin-top-10"
            type="submit"
            form="login-form"
          >
            Proceed <i className="icon-material-outline-arrow-right-alt" />
          </button>
          {/* Copyright */}
          <div className="social-login-separator" />
          <center>© Address Data</center>
        </div>
      </div>
    </div>
  </div>
  {/* End Authentication */}
  {/* Spacer */}
  <div className="margin-top-70" />
  {/* Spacer / End*/}
  {/* Wrapper / End */}
    </>
  )
}
export default Index
