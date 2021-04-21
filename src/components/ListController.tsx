import React from 'react'

import demoVideos from '../utils/demoVideos'

import SortByDate from './ListController/SortByDate'
import FavoritesOnly from './ListController/FavoritesOnly'
import TileListView from './ListController/TileListView'
import RemoveAll from './ListController/RemoveAll'
import UploadDemo from './ListController/UploadDemo'

function Controller() {
  const demos = demoVideos()

  return (
    <div
      className="d-flex justify-content-end align-items-center"
      style={{ gap: 10 }}
    >
      <SortByDate />
      <FavoritesOnly />
      <TileListView />

      <UploadDemo videos={demos} />
      <RemoveAll />
    </div>
  )
}

export default Controller
