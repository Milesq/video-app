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
import { useSelector } from '../../store'
import { DeleteIcon, HearthIcon } from '../../svg'

import VideoStats from './VideoStats'

interface VideoCardProps {
  className?: string

  title: string
}

function VideoCard({ className, title }: PropsWithChildren<VideoCardProps>) {
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  const [isFavorite, setIsFavorite] = useState(Math.random() > 0.5)

  return (
    <Col lg="4" md="6" className={className}>
      <Card
        inverse={isDark}
        style={
          isDark ? { backgroundColor: '#33383f', borderColor: '#33383f' } : {}
        }
      >
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

          <div className="d-flex justify-content-around mt-4 text-black-50">
            <HearthIcon
              width="32"
              onClick={() => setIsFavorite(is => !is)}
              stroke="var(--insta-red)"
              className={`cursor-pointer ${
                isFavorite
                  ? 'text-insta-red'
                  : `${Styles.heart} text-transparent`
              }`}
            />

            <DeleteIcon
              className={`${Styles.delete} cursor-pointer`}
              width="32"
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VideoCard
