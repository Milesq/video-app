import React from 'react'

import SortByDate from './ListController/SortByDate'
import FavoritesOnly from './ListController/FavoritesOnly'
import TileListView from './ListController/TileListView'

function Controller() {
  return (
    <div className="d-flex justify-content-end" style={{ gap: 10 }}>
      <SortByDate />
      <FavoritesOnly />
      <TileListView />
    </div>
  )
}

export default Controller
