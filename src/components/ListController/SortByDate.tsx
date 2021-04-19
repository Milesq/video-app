import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector, videoDisplayer } from '../../store'
import {
  CalendarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ClearFilterIcon,
} from '../../svg'
import { Order } from '../../utils'

function SortByDate() {
  const dispatch = useDispatch()
  const { key: sortKey, order: sortOrder } = useSelector(
    state => state.videoDisplayer.sortBy
  )

  const MatchingArrowIcon =
    sortOrder === Order.Asc ? ArrowUpIcon : ArrowDownIcon

  const changeDateSortingOrder = () => {
    const order = sortOrder === Order.Asc ? Order.Desc : Order.Asc

    dispatch(
      videoDisplayer.setSortKey({
        order,
        key: videoDisplayer.SortKey.Date,
      })
    )
  }

  const clearSortSettings = () => {
    dispatch(
      videoDisplayer.setSortKey({
        key: null,
      })
    )
  }

  return (
    <div className="text-secondary cursor-pointer">
      {sortKey && <ClearFilterIcon width="32" onClick={clearSortSettings} />}
      <CalendarIcon width="32" onClick={changeDateSortingOrder} />
      <MatchingArrowIcon width="20" />
    </div>
  )
}

export default SortByDate
