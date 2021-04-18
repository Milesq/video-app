import React, { PropsWithChildren } from 'react'

import Tile from './cards/Tile'
import ListElement from './cards/ListElement'

const styles = {
  tile: Tile,
  list: ListElement,
}

export interface VideoElementProps {
  className?: string

  title: string
  isFavorite?: boolean
  onLike?: (isLiked: boolean) => void
  onDelete?: () => void
}

interface VideoCardProps {
  style?: keyof typeof styles
}

function VideoCard({
  style = 'tile',
  ...props
}: PropsWithChildren<VideoCardProps & VideoElementProps>) {
  const VideoCardElement = styles[style]

  return <VideoCardElement {...props} />
}

export default VideoCard
