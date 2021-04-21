import React from 'react'
import { useDispatch } from 'react-redux'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import { useSelector, videoList } from '../store'

function PaginationController() {
  const dispatch = useDispatch()
  const { pageCount, currentPage } = useSelector(({ videoList }) => videoList)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pageCount

  const setPage = (n: number) => dispatch(videoList.setCurrentPage(n))
  const prevPage = () => dispatch(videoList.prevPage())
  const nextPage = () => dispatch(videoList.nextPage())

  return (
    <Pagination>
      <PaginationItem disabled={isFirstPage}>
        <PaginationLink first onClick={() => setPage(1)} />
      </PaginationItem>
      <PaginationItem disabled={isFirstPage}>
        <PaginationLink previous onClick={prevPage} />
      </PaginationItem>

      {new Array(pageCount).fill(null).map((_, i) => (
        <PaginationItem key={i} active={i + 1 === currentPage}>
          <PaginationLink onClick={() => setPage(i + 1)}>
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem disabled={isLastPage}>
        <PaginationLink next onClick={nextPage} />
      </PaginationItem>
      <PaginationItem disabled={isLastPage}>
        <PaginationLink last onClick={() => setPage(pageCount)} />
      </PaginationItem>
    </Pagination>
  )
}

export default PaginationController
