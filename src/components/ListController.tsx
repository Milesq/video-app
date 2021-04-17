import React from 'react'

import { HearthIcon, ListIcon } from '../svg'

function Controller() {
  return (
    <div className="d-flex justify-content-end" style={{ gap: 10 }}>
      <div>
        <HearthIcon width="32" className="text-insta-red cursor-pointer" />
      </div>
      <div>
        <ListIcon width="32" className="text-secondary cursor-pointer" />
      </div>
    </div>
  )
}

export default Controller
