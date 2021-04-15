import React from 'react'
import { Container } from 'reactstrap'

import Navbar from './components/layout/Navbar'
import AddVideos from './components/AddVideos'
import ListVideos from './components/ListVideos'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Container className="mt-8">
        <AddVideos />
        <ListVideos />
      </Container>
      <Footer />
    </>
  )
}

export default App
