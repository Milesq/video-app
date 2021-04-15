import React, { useContext } from 'react'

import { ThemeContext } from '../../utils'

function Footer() {
  const theme = useContext(ThemeContext)

  return (
    <footer className="p-4 text-center">
      Miłosz Wiśniewski &copy; 2021 - zadanie rekrutacyjne
    </footer>
  )
}

export default Footer
