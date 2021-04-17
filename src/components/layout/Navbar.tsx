import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Navbar as RSNavbar, NavbarBrand } from 'reactstrap'

import { theme } from '../../store'
import { ThemeBtnIcon } from '../../svg'
import { ThemeContext } from '../../utils'

function Navbar() {
  const dispatch = useDispatch()
  const choosenTheme = useContext(ThemeContext)
  const isDark = choosenTheme === 'dark'

  const changeTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'

    dispatch(theme.changeTheme(newTheme))
  }

  return (
    <header>
      <RSNavbar color={isDark ? 'dark' : 'secondary'}>
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
            style={{
              filter: 'contrast(300%)',
            }}
          />

          <h1 className="h4 m-0">Video App</h1>
        </NavbarBrand>

        <ThemeBtnIcon
          width="32"
          onClick={changeTheme}
          className="cursor-pointer"
        />
      </RSNavbar>
    </header>
  )
}

export default Navbar
