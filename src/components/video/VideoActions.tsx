import React, { useState } from 'react'

import Styles from '../../sass/modules/icons.module.scss'
import { DeleteIcon, HearthIcon, PlayIcon } from '../../svg'
import { useDidChanged } from '../../utils'

import { VideoElementProps } from './VideoCard'

function VideoAction({ video, onDelete, onLike }: VideoElementProps) {
  const [isLiked, setIsLiked] = useState(video.isFavorite as boolean)

  useDidChanged(() => {
    onLike?.(isLiked)
  }, [isLiked])

  return (
    <>
      <a href={video.src}>
        <PlayIcon width="32" className={Styles.play} />
      </a>

      <HearthIcon
        width="32"
        onClick={() => setIsLiked(!isLiked)}
        stroke="var(--insta-red)"
        className={`cursor-pointer ${
          video.isFavorite
            ? 'text-insta-red'
            : `${Styles.heart} text-transparent`
        }`}
      />

      <DeleteIcon
        onClick={() => onDelete?.()}
        className={`${Styles.delete} cursor-pointer`}
        width="32"
      />
    </>
  )
}

export default VideoAction
