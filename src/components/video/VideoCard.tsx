import React, { PropsWithChildren, useState } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from 'reactstrap'

import Styles from '../../sass/modules/VideoCars.module.scss'

import VideoStats from './VideoStats'

interface VideoCardProps {
  className?: string

  title: string
}

function VideoCard({ className, title }: PropsWithChildren<VideoCardProps>) {
  const [isFavorite, setIsFavorite] = useState(Math.random() > 0.5)

  return (
    <Col lg="4" md="6" className={className}>
      <Card>
        <CardImg
          width="100%"
          src="https://placeimg.com/318/180/animals"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <VideoStats date="16.04.2021" likes="12" views="120" />
          </CardSubtitle>

          <div className="d-flex justify-content-around mt-4">
            <svg
              onClick={() => setIsFavorite(is => !is)}
              className={`text-insta-red ${isFavorite && Styles.heart}`}
              style={{ width: 32, height: 32, cursor: 'pointer' }}
              viewBox="0 0 24 24"
            >
              <path
                fill={isFavorite ? 'transparent' : 'currentColor'}
                stroke={isFavorite ? 'currentColor' : 'transparent'}
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>

            <svg
              className={Styles.delete}
              style={{ width: 32, height: 32, cursor: 'pointer' }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
              />
            </svg>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VideoCard
