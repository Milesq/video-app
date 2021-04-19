import React from 'react'

import SortByDate from './ListController/SortByDate'
import FavoritesOnly from './ListController/FavoritesOnly'
import TileListView from './ListController/TileListView'
import RemoveAll from './ListController/RemoveAll'
import UploadDemo from './ListController/UploadDemo'

function Controller() {
  const demos = [
    'o-Psuz7u5OI',
    'fzI9FNjXQ0o',
    'tN5KIUNfYGA',
    'vl6jn-DdafM',
  ]

  return (
    <div className="d-flex justify-content-end" style={{ gap: 10 }}>
      <SortByDate />
      <FavoritesOnly />
      <TileListView />

      <UploadDemo videos={demos} />
      <RemoveAll />
    </div>
  )
}

export default Controller
