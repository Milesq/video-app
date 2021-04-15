import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import store from './store'
import { ThemeContext } from './utils'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value="light">
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
