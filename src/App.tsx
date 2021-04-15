import React from 'react'
import { Container } from 'reactstrap'

import { ThemeContext } from './utils'
import { useSelector } from './store'
import Navbar from './components/layout/Navbar'
import AddVideos from './components/AddVideos'
import ListVideos from './components/ListVideos'
import Footer from './components/layout/Footer'

function App() {
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  return (
    <ThemeContext.Provider value={choosenTheme}>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div
          style={{
            flex: '1',
            backgroundColor: isDark ? '#22272e' : 'white',
            color: isDark ? 'white' : 'black',
          }}
        >
          <Container className="mt-8">
            <section>
              <AddVideos />
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
