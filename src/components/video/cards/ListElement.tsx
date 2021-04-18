import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Col, ListGroupItem } from 'reactstrap'

import Styles from '../../../sass/modules/VideoCars.module.scss'
import { useSelector } from '../../../store'
import { DeleteIcon, HearthIcon } from '../../../svg'
import { format } from '../../../utils'
import { VideoElementProps } from '../VideoCard'
import VideoStats from '../VideoStats'

function VideoListElement({
  onDelete,
  onLike,
  video,
}: PropsWithChildren<VideoElementProps>) {
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  const { title, likes, views, isFavorite, uploadDate } = video

  const [isLiked, setIsLiked] = useState(isFavorite as boolean)

  useEffect(() => {
    onLike?.(isLiked)
  }, [isLiked])

  const formattedUploadDate = format.date(uploadDate)

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
            <VideoStats
              date={formattedUploadDate}
              likes={format.number(likes)}
              views={format.number(views || 0)}
            />
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
