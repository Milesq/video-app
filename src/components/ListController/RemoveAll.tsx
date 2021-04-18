import React from 'react'
import { useDispatch } from 'react-redux'

import { videos } from '../../store'
import { DeleteIcon } from '../../svg'
import Styles from '../../sass/modules/icons.module.scss'

function TileListView() {
  const dispatch = useDispatch()

  const clearVideos = () => dispatch(videos.clearAll())

  return (
    <DeleteIcon
      onClick={clearVideos}
      width="32"
      className={`cursor-pointer ${Styles.delete}`}
    />
  )
}

export default TileListView
