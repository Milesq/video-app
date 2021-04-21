import React, { useEffect } from 'react'
import usePagination from 'use-pagination'

import { Video } from '../../interfaces'

import VideoCard from './VideoCard'

interface PaginatedVideoListProps {
  videos: Video[]
  currentPage: number
  itemsPerPage?: number
  listMode?: boolean
  onDelete?(id: string): void
  onLike?(id: string): void
  onChangePageCount?(n: number): void
}

function PaginatedVideoList({
  videos,
  itemsPerPage = 6,
  listMode,
  onDelete,
  onLike,
  currentPage,
  onChangePageCount,
}: PaginatedVideoListProps) {
  const { setCurrentPage, currentItems } = usePagination({
    items: videos,
    itemsPerPage,
  })
  const totalPages = Math.ceil(videos.length / itemsPerPage)

  useEffect(() => {
    onChangePageCount?.(totalPages)

    // refresh currentItems
    setCurrentPage(currentPage)
  }, [totalPages])

  useEffect(() => {
    setCurrentPage(currentPage)
  }, [currentPage])

  return (
    <>
      {currentItems.map((video: Video) => (
        <VideoCard
          key={video.id}
          video={video}
          style={listMode ? 'list' : 'tile'}
          className="my-3"
          onDelete={() => onDelete?.(video.id)}
          onLike={() => onLike?.(video.id)}
        />
      ))}
    </>
  )
}

export default PaginatedVideoList
