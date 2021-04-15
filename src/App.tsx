import React from 'react'
import { Container } from 'reactstrap'

import Navbar from './components/layout/Navbar'
import AddVideos from './components/AddVideos'
import ListVideos from './components/ListVideos'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container className="mt-8" style={{ flex: '1' }}>
        <section>
          <AddVideos />
          <ListVideos />
        </section>
      </Container>
      <Footer />
    </div>
  )
}

export default App
