import React, { useState } from 'react'

import Styles from '../../sass/modules/icons.module.scss'
import { DeleteIcon, HearthIcon, PlayIcon } from '../../svg'
import { useDidChanged } from '../../utils'
import RoleButton from '../utils/RoleButton'

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

      <RoleButton action={() => setIsLiked(!isLiked)}>
        <HearthIcon
          width="32"
          stroke="var(--insta-red)"
          className={`cursor-pointer ${
            video.isFavorite
              ? 'text-insta-red'
              : `${Styles.heart} text-transparent`
          }`}
        />
      </RoleButton>

      <RoleButton action={() => onDelete?.()}>
        <DeleteIcon className={`${Styles.delete} cursor-pointer`} width="32" />
      </RoleButton>
    </>
  )
}

export default VideoAction
