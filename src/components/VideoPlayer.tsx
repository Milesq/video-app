import React, {
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

interface VideoPlayerProps {
  title?: string
  embedHtml: string
}

export interface VideoPlayerHandler {
  open(): void
  isOpen: boolean
}

type IVideoPlayer = ForwardRefRenderFunction<
  VideoPlayerHandler,
  VideoPlayerProps
>

// eslint-disable-next-line react/prop-types
const VideoPlayer: IVideoPlayer = ({ embedHtml, title = '' }, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true)
    },
    isOpen,
  }))

  return (
    <Modal size="lg" isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody
        style={{ height: '60vh' }}
        dangerouslySetInnerHTML={{ __html: embedHtml }}
      />
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Zamknij
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default React.forwardRef(VideoPlayer)
