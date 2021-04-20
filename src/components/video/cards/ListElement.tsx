import React, { PropsWithChildren, useRef } from 'react'
import { Col, ListGroupItem } from 'reactstrap'

import VideoActions from '../VideoActions'
import { useSelector } from '../../../store'
import { format } from '../../../utils'
import VideoPlayer, { VideoPlayerHandler } from '../../VideoPlayer'
import { VideoElementProps } from '../VideoCard'
import VideoStats from '../VideoStats'

function VideoListElement({
  video,
  ...actions
}: PropsWithChildren<VideoElementProps>) {
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  const { title, likes, views, uploadDate, embedHtml } = video

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
            className="mb-3 mb-sm-0 cursor-pointer"
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

            <VideoActions video={video} {...actions} />
          </div>
        </ListGroupItem>
      </Col>
    </>
  )
}

export default VideoListElement
