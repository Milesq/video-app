import React, { useContext } from 'react'

import { ThemeContext } from '../../utils'

function Footer() {
  const theme = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <footer
      className={`p-4 text-center bg-${theme} font-weight-bold text-${
        isDark ? 'white' : 'black'
      }`}
    >
      Miłosz Wiśniewski &copy; 2021 - zadanie rekrutacyjne
    </footer>
  )
}

export default Footer
