import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import getStore from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
