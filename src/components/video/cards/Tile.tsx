import React, { PropsWithChildren, useState } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from 'reactstrap'

import Styles from '../../../sass/modules/icons.module.scss'
import { useSelector } from '../../../store'
import { DeleteIcon, HearthIcon } from '../../../svg'
import { format, useDidChanged } from '../../../utils'
import { VideoElementProps } from '../VideoCard'
import VideoStats from '../VideoStats'

function VideoListElement({
  className,
  onDelete,
  onLike,
  video,
}: PropsWithChildren<VideoElementProps>) {
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  const { title, likes, views, isFavorite, uploadDate, src } = video

  const [isLiked, setIsLiked] = useState(isFavorite as boolean)

  useDidChanged(() => {
    onLike?.(isLiked)
  }, [isLiked])

  const formattedUploadDate = format.date(uploadDate)

  return (
    <Col lg="4" md="6" className={className}>
      <Card
        inverse={isDark}
        style={
          isDark ? { backgroundColor: '#33383f', borderColor: '#33383f' } : {}
        }
      >
        <CardImg width="100%" src={src} alt={title} />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <VideoStats
              date={formattedUploadDate}
              likes={format.number(likes)}
              views={format.number(views || 0)}
            />
          </CardSubtitle>

          <div className="d-flex justify-content-around mt-4 text-black-50">
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
        </CardBody>
      </Card>
    </Col>
  )
}

export default VideoListElement
