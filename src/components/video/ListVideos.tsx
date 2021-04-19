import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row } from 'reactstrap'

import { useSelector, videos } from '../../store'
import { DiplayMode } from '../../store/videoDisplayer'

import VideoCard from './VideoCard'

function ListVideos() {
  const dispatch = useDispatch()
  let currentVideos = useSelector(({ videos }) => videos.videos)
  const currentDisplayMode = useSelector(
    ({ videoDisplayer }) => videoDisplayer.mode
  )
  const isListMode = currentDisplayMode === DiplayMode.List

  const isFavoriteOnlyMode = useSelector(
    ({ videoDisplayer }) => videoDisplayer.filterBy.favorite
  )

  if (isFavoriteOnlyMode) {
    currentVideos = currentVideos.filter(({ isFavorite }) => isFavorite)
  }

  const deleteMovie = (id: string) => {
    dispatch(videos.remove({ id }))
  }

  const swicthMovieLike = (id: string) => {
    dispatch(videos.switchLike({ id }))
  }

  return (
    <Container fluid>
      <Row>
        {currentVideos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            style={isListMode ? 'list' : 'tile'}
            className="my-3"
            onDelete={() => deleteMovie(video.id)}
            onLike={() => swicthMovieLike(video.id)}
          />
        ))}
        {!currentVideos.length && (
          <h2 className="w-100 text-center h4">Brak zapisanych filmów</h2>
        )}
      </Row>
    </Container>
  )
}

export default ListVideos
