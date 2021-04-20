import React from 'react'
import { useDispatch } from 'react-redux'

import RoleButton from '../utils/RoleButton'
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
    <RoleButton action={uploadDemo}>
      <DemoIcon width="42" className="cursor-pointer text-secondary" />
    </RoleButton>
  )
}

export default UploadDemo
