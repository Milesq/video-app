import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Col, ListGroupItem } from 'reactstrap'

import Styles from '../../../sass/modules/VideoCars.module.scss'
import { useSelector } from '../../../store'
import { DeleteIcon, HearthIcon } from '../../../svg'
import { VideoElementProps } from '../VideoCard'
import VideoStats from '../VideoStats'

function VideoListElement({
  title,
  onDelete,
  onLike,
  isFavorite,
}: PropsWithChildren<VideoElementProps>) {
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  const [isLiked, setIsLiked] = useState(isFavorite as boolean)

  useEffect(() => {
    onLike?.(isLiked)
  }, [isLiked])

  return (
    <Col xs="12">
      <ListGroupItem
        className={`d-flex justify-content-between align-items-center ${
          isDark && 'bg-dark text-white'
        }`}
      >
        <div>{title}</div>
        <div className="d-flex justify-content-around w-50" style={{ gap: 20 }}>
          <div className="text-secondary d-flex align-items-center w-100">
            <VideoStats date="16.04.2021" likes="12" views="120" />
          </div>

          <HearthIcon
            width="32"
            onClick={() => setIsLiked(!isLiked)}
            stroke="var(--insta-red)"
            className={`cursor-pointer ${
              isFavorite ? 'text-insta-red' : `${Styles.heart} text-transparent`
            }`}
          />

          <DeleteIcon
            onClick={() => onDelete?.()}
            className={`${Styles.delete} cursor-pointer`}
            width="32"
          />
        </div>
      </ListGroupItem>
    </Col>
  )
}

export default VideoListElement
