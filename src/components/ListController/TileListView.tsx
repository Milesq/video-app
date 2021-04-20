import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector, videoDisplayer } from '../../store'
import { DiplayMode } from '../../store/videoDisplayer'
import { ListIcon, TileIcon } from '../../svg'
import RoleButton from '../utils/RoleButton'

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
    <RoleButton action={changeDisplayMode}>
      <AlternativeDisplayIcon
        width="32"
        className="text-secondary cursor-pointer"
      />
    </RoleButton>
  )
}

export default TileListView
