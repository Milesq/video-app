import React from 'react'
import { useDispatch } from 'react-redux'

import RoleButton from '../utils/RoleButton'
import { videos } from '../../store'
import { DeleteIcon } from '../../svg'
import Styles from '../../sass/modules/icons.module.scss'

function TileListView() {
  const dispatch = useDispatch()

  const clearVideos = () => dispatch(videos.clearAll())

  return (
    <RoleButton action={clearVideos}>
      <DeleteIcon width="32" className={`cursor-pointer ${Styles.delete}`} />
    </RoleButton>
  )
}

export default TileListView
