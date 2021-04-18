import React from 'react'
import { Container, Row } from 'reactstrap'

import { useSelector } from '../../store'
import { DiplayMode } from '../../store/videoDisplayer'

import VideoCard from './VideoCard'

function ListVideos() {
  const currentDisplayMode = useSelector(
    ({ videoDisplayer }) => videoDisplayer.mode
  )
  const isListMode = currentDisplayMode === DiplayMode.List

  return (
    <Container fluid>
      <Row>
        {new Array(7).fill(0).map((_, i) => (
          <VideoCard
            style={isListMode ? 'list' : 'tile'}
            isFavorite={true}
            title="Lorem Ipsum"
            className="my-3"
            key={i}
          />
        ))}
      </Row>
    </Container>
  )
}

export default ListVideos
