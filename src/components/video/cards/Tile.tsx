import React, { PropsWithChildren, useRef } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from 'reactstrap'

import { useSelector } from '../../../store'
import { format } from '../../../utils'
import VideoPlayer, { VideoPlayerHandler } from '../../VideoPlayer'
import { VideoElementProps } from '../VideoCard'
import VideoStats from '../VideoStats'
import VideoActions from '../VideoActions'

function VideoListElement({
  className,
  video,
  ...actions
}: PropsWithChildren<VideoElementProps>) {
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  const { title, likes, views, uploadDate, src, embedHtml } = video

  const formattedUploadDate = format.date(uploadDate)
  const videoPlayer = useRef<VideoPlayerHandler>(null)

  return (
    <>
      <VideoPlayer ref={videoPlayer} embedHtml={embedHtml} title={title} />
      <Col lg="4" md="6" className={className}>
        <Card
          inverse={isDark}
          style={
            isDark ? { backgroundColor: '#33383f', borderColor: '#33383f' } : {}
          }
        >
          <CardImg
            width="100%"
            src={src}
            alt={title}
            onClick={() => videoPlayer.current?.open()}
            className="cursor-pointer"
          />
          <CardBody>
            <CardTitle
              tag="h5"
              className="hide-text-ellipsis cursor-pointer"
              onClick={() => videoPlayer.current?.open()}
            >
              {title}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              <VideoStats
                date={formattedUploadDate}
                likes={format.number(likes)}
                views={format.number(views || -1)}
              />
            </CardSubtitle>

            <div className="d-flex justify-content-around mt-4 text-black-50">
              <VideoActions video={video} {...actions} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default VideoListElement
