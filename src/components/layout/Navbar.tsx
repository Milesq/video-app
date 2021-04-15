import React from 'react'
import { useDispatch } from 'react-redux'
import { Navbar as RSNavbar, NavbarBrand } from 'reactstrap'

import { theme, useSelector } from '../../store'

function Navbar() {
  const dispatch = useDispatch()
  const choosenTheme = useSelector(state => state.theme.theme)

  const changeTheme = () => {
    const newTheme = choosenTheme === 'light' ? 'dark' : 'light'

    dispatch(theme.changeTheme(newTheme))
  }

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

        <svg
          onClick={changeTheme}
          style={{ cursor: 'pointer' }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"
          />
        </svg>
      </RSNavbar>
    </header>
  )
}

export default Navbar
