import React from 'react'
import { Container, Row } from 'reactstrap'

import VideoCard from './VideoCard'

function ListVideos() {
  return (
    <Container fluid>
      <Row>
        {new Array(7).fill(0).map((_, i) => (
          <VideoCard title="Lorem Ipsum" className="my-3" key={i} />
        ))}
      </Row>
    </Container>
  )
}

export default ListVideos
