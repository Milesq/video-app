import React, { PropsWithChildren } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
} from 'reactstrap'

interface VideoCardProps {
  className: string
}

function VideoCard({ className }: PropsWithChildren<Partial<VideoCardProps>>) {
  return (
    <Col lg="4" md="6" className={className}>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeimg.com/318/180/animals"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VideoCard
