import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Input,
  InputGroup,
  InputProps,
  InputGroupAddon,
} from 'reactstrap'

import { useSelector, videos } from '../../store'

function AddVideos() {
  const dispatch = useDispatch()
  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'
  const newMovieHandler: InputProps['innerRef'] = useRef(null)

  const handleAddMovie = () => {
    if (!newMovieHandler.current) return

    dispatch(videos.addVideo(newMovieHandler.current.value))
    newMovieHandler.current.value = ''
  }

  return (
    <div className="d-flex justify-content-center">
      <InputGroup className="w-md-50">
        <Input
          innerRef={newMovieHandler}
          onKeyDown={ev => ev.key === 'Enter' && handleAddMovie()}
          className={isDark ? 'form-control--dark' : ''}
          placeholder="Podaj link do filmu:"
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        />

        <InputGroupAddon addonType="append">
          <Button
            onClick={handleAddMovie}
            color="success"
            type="button"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            Dodaj
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default AddVideos
