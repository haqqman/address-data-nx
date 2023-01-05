import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <Image
              src="assets/images/logo-light.svg"
              alt="Address Logo"
              className="img-fluid"
            /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-menu" />
          </button>
          <div
            className="collapse navbar-collapse h-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto menu">
              <li>
                <Link to="/index">About</Link>
              </li>
              <li>
                <Link to="/documentation">Documentation</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <font color="white">
                  <Link className="dropdown-toggle">Manage Account</Link>
                </font>
                <ul className="sub-menu">
                  <li>
                    <Link to="/access">Access</Link>
                  </li>
                  <li>
                    <Link to="/create">Create</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
