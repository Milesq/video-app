import React from 'react'
import { Container } from 'reactstrap'

import { ThemeContext } from './utils'
import { useSelector } from './store'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AddVideos from './components/video/AddVideos'
import ListVideos from './components/video/ListVideos'
import ListController from './components/ListController'
import PaginationController from './components/PaginationController'

function App() {
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  return (
    <ThemeContext.Provider value={choosenTheme}>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div
          className={`bg-${isDark ? 'primary-dark' : 'white'}`}
          style={{
            flex: '1',
            color: isDark ? 'white' : 'black',
          }}
        >
          <Container>
            <section className="mt-md-5 mt-3">
              <AddVideos />

              <div className="my-5"></div>
              <PaginationController />
              <ListController />

              <div className="my-3"></div>

              <ListVideos />
            </section>
          </Container>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
