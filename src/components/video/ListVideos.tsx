import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row } from 'reactstrap'

import { useSelector, videos } from '../../store'
import { DiplayMode, SortKey } from '../../store/videoDisplayer'
import { compareFunctions } from '../../utils'

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
  const sortSettings = useSelector(
    ({ videoDisplayer }) => videoDisplayer.sortBy
  )

  const deleteMovie = (id: string) => {
    dispatch(videos.remove({ id }))
  }

  const swicthMovieLike = (id: string) => {
    dispatch(videos.switchLike({ id }))
  }

  if (isFavoriteOnlyMode) {
    currentVideos = currentVideos.filter(({ isFavorite }) => isFavorite)
  }

  if (sortSettings.key !== null) {
    const cmpFn = compareFunctions[sortSettings.order]

    currentVideos = [...currentVideos].sort((a, b) => {
      return cmpFn(
        a[sortSettings.key as SortKey] || 0,
        b[sortSettings.key as SortKey] || 0
      )
    })
  }
  console.log(currentVideos[0], sortSettings)

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
