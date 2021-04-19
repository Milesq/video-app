import React from 'react'
import { useDispatch } from 'react-redux'

import { videos } from '../../store'
import { DemoIcon } from '../../svg'

interface UploadDemoProps {
  videos: string[]
}

function UploadDemo({ videos: demoVideos }: UploadDemoProps) {
  const dispatch = useDispatch()

  const uploadDemo = () => {
    dispatch(videos.addVideo(demoVideos))
  }

  return (
    <DemoIcon
      onClick={uploadDemo}
      width="42"
      className="cursor-pointer text-secondary"
    />
  )
}

export default UploadDemo
