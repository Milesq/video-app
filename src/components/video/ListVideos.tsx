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
  const videos = useSelector(({ videos }) => videos.videos)

  return (
    <Container fluid>
      <Row>
        {videos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            style={isListMode ? 'list' : 'tile'}
            className="my-3"
          />
        ))}
        {!videos.length && (
          <h2 className="w-100 text-center h4">Brak zapisanych filmów</h2>
        )}
      </Row>
    </Container>
  )
}

export default ListVideos
