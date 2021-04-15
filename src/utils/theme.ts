import { createContext } from 'react'

import { Theme } from '~/store/theme'

const ThemeContext = createContext<Theme>('light')

export default ThemeContext
