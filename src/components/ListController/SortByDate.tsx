import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector, videoDisplayer } from '../../store'
import { SortCalendarAsc, SortCalendarDesc, ClearFilterIcon } from '../../svg'
import { Order } from '../../utils'

function SortByDate() {
  const dispatch = useDispatch()
  const { key: sortKey, order: sortOrder } = useSelector(
    state => state.videoDisplayer.sortBy
  )

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

  const MatchingSortDirectionIcon =
    sortOrder === Order.Asc ? SortCalendarAsc : SortCalendarDesc

  return (
    <div className="text-secondary cursor-pointer">
      {sortKey && <ClearFilterIcon width="32" onClick={clearSortSettings} />}
      <MatchingSortDirectionIcon width="35" onClick={changeDateSortingOrder} />
    </div>
  )
}

export default SortByDate
