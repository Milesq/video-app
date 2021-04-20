import React, { PropsWithChildren, useRef, useState } from 'react'
import { Col, ListGroupItem } from 'reactstrap'

import Styles from '../../../sass/modules/icons.module.scss'
import { useSelector } from '../../../store'
import { DeleteIcon, HearthIcon } from '../../../svg'
import { format, useDidChanged } from '../../../utils'
import VideoPlayer, { VideoPlayerHandler } from '../../VideoPlayer'
import { VideoElementProps } from '../VideoCard'
import VideoStats from '../VideoStats'

function VideoListElement({
  onDelete,
  onLike,
  video,
}: PropsWithChildren<VideoElementProps>) {
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  const { title, likes, views, isFavorite, uploadDate, embedHtml } = video

  const [isLiked, setIsLiked] = useState(isFavorite as boolean)

  useDidChanged(() => {
    onLike?.(isLiked)
  }, [isLiked])

  const formattedUploadDate = format.date(uploadDate)
  const videoPlayer = useRef<VideoPlayerHandler>(null)

  return (
    <>
      <VideoPlayer ref={videoPlayer} embedHtml={embedHtml} title={title} />
      <Col xs="12">
        <ListGroupItem
          className={`d-flex justify-content-between flex-column flex-md-row align-items-center ${
            isDark && 'bg-dark text-white'
          }`}
        >
          <div
            className="mb-3 mb-sm-0"
            onClick={() => videoPlayer.current?.open()}
          >
            {title}
          </div>
          <div
            className="d-flex justify-content-around flex-wrap flex-md-nowrap w-50"
            style={{ gap: 20 }}
          >
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
                isFavorite
                  ? 'text-insta-red'
                  : `${Styles.heart} text-transparent`
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
    </>
  )
}

export default VideoListElement
