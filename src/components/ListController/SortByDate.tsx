import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector, videoDisplayer } from '../../store'
import { CalendarIcon, ArrowUpIcon, ArrowDownIcon } from '../../svg'
import { Order } from '../../utils'

function SortByDate() {
  const dispatch = useDispatch()
  const sortOrder = useSelector(state => state.videoDisplayer.sortBy.order)

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

  return (
    <div className="text-secondary cursor-pointer">
      <CalendarIcon width="32" onClick={changeDateSortingOrder} />
      <MatchingArrowIcon width="20" />
    </div>
  )
}

export default SortByDate
