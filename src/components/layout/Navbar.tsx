import React from 'react'
import { Navbar as RSNavbar, NavbarBrand } from 'reactstrap'

function Navbar() {
  return (
    <header>
      <RSNavbar color="secondary" light>
        <NavbarBrand
          href="/"
          className="mr-auto text-white d-flex align-items-center"
        >
          <img
            height="32"
            width="32"
            src="/favicon.ico"
            alt="VideoApp's logo"
            className="mr-2"
          />

          <h1 className="h4 m-0">Video App</h1>
        </NavbarBrand>
      </RSNavbar>
    </header>
  )
}

export default Navbar
