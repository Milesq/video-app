import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector, videoDisplayer } from '../store'
import { HearthIcon, ListIcon } from '../svg'

function Controller() {
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
    <div className="d-flex justify-content-end" style={{ gap: 10 }}>
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
      <div>
        <ListIcon width="32" className="text-secondary cursor-pointer" />
      </div>
    </div>
  )
}

export default Controller
