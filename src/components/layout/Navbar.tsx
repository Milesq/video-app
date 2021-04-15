import React from 'react'
import { Navbar as RSNavbar, NavbarBrand } from 'reactstrap'

function Navbar() {
  return (
    <RSNavbar color="secondary" light>
      <NavbarBrand
        href="/"
        className="mr-auto text-white d-flex align-items-center"
      >
        <img height="32" width="32" src="/favicon.ico" className="mr-2" />
        <span>Video App</span>
      </NavbarBrand>
    </RSNavbar>
  )
}

export default Navbar
