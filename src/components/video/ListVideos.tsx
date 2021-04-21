import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row } from 'reactstrap'

import { useSelector, videoList, videos } from '../../store'
import { DiplayMode, SortKey } from '../../store/videoDisplayer'
import { compareFunctions } from '../../utils'

import PaginatedVideoList from './PaginatedVideoList'

function ListVideos() {
  const dispatch = useDispatch()
  const currentPage = useSelector(({ videoList }) => videoList.currentPage)
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

  return (
    <Container fluid>
      <Row>
        <PaginatedVideoList
          currentPage={currentPage}
          videos={currentVideos}
          listMode={isListMode}
          onDelete={deleteMovie}
          onLike={swicthMovieLike}
          onChangePageCount={count => dispatch(videoList.setPageCount(count))}
          itemsPerPage={isListMode ? 10 : 6}
        />

        {!currentVideos.length && (
          <h2 className="w-100 text-center h4">Brak zapisanych filmów</h2>
        )}
      </Row>
    </Container>
  )
}

export default ListVideos
