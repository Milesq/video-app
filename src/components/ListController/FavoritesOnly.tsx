import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector, videoDisplayer } from '../../store'
import { HearthIcon } from '../../svg'
function FaoritesOnly() {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.videoDisplayer.filterBy)

  const isFavoriteOnly = filters.favorite

  const changeFavoriteOnly = () => {
    dispatch(
      videoDisplayer.setFilter({
        favorite: !isFavoriteOnly,
      })
    )
  }

  return (
    <div>
      <HearthIcon
        width="32"
        onClick={changeFavoriteOnly}
        stroke="var(--insta-red)"
        className={`cursor-pointer ${
          // prettier-ignore
          isFavoriteOnly
            ? 'text-insta-red'
            : 'text-transparent'
        }`}
      />
    </div>
  )
}

export default FaoritesOnly
