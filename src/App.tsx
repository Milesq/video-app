import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import { useDispatch } from 'react-redux'

import { ThemeContext } from './utils'
import { useSelector } from './store'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AddVideos from './components/video/AddVideos'
import ListVideos from './components/video/ListVideos'
import ListController from './components/ListController'
import PaginationController from './components/PaginationController'
import { refreshAllVideos } from './store/videos'

function App() {
  const dispatch = useDispatch()
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  useEffect(() => {
    dispatch(refreshAllVideos())
  }, [])

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

              <div
                className="
                  d-flex
                  justify-content-between
                  align-items-center
                  flex-column
                  flex-md-row-reverse
                  mt-5 px-md-3 w-100
                "
              >
                <ListController />
                <div className="d-md-none my-3"></div>
                <PaginationController />
              </div>

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
