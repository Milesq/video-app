import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector, videoDisplayer } from '../../store'
import { DiplayMode } from '../../store/videoDisplayer'
import { ListIcon, TileIcon } from '../../svg'

function TileListView() {
  const dispatch = useDispatch()
  const displayMode = useSelector(({ videoDisplayer }) => videoDisplayer.mode)

  const isListMode = displayMode === DiplayMode.List

  const AlternativeDisplayIcon = isListMode ? TileIcon : ListIcon

  const changeDisplayMode = () => {
    dispatch(
      videoDisplayer.changeDisplayMode(
        isListMode ? DiplayMode.Tiles : DiplayMode.List
      )
    )
  }

  return (
    <AlternativeDisplayIcon
      onClick={changeDisplayMode}
      width="32"
      className="text-secondary cursor-pointer"
    />
  )
}

export default TileListView
