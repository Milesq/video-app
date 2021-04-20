import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { VideoError } from '../errors'
import { Video } from '../interfaces'
import { resolve } from '../video-resolvers'

import { RootState } from '.'

export interface VideosState {
  videos: Video[]
  error: VideoError | null
  pending: boolean
}

const initialState: VideosState = {
  videos: [],
  error: null,
  pending: false,
}

function videoDoesntExists(id: string, videos: Video[]) {
  const videoIds = videos.map(video => video.id)
  const duplicationExists = videoIds.some(videoId => id.includes(videoId))

  return !duplicationExists
}

const addVideo = createAsyncThunk(
  'videos/addVideo',
  (url: string | string[], { getState }) => {
    const idsArray = typeof url === 'string' ? [url] : url
    const {
      videos: { videos },
    } = getState() as RootState
    const distinctedVideos = idsArray.filter(id =>
      videoDoesntExists(id, videos)
    )

    return Promise.all(distinctedVideos.map(resolve))
  }
)

export const slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    clearAll(state) {
      state.videos = []
    },
    switchLike(state, { payload }: PayloadAction<{ id: string }>) {
      const idxToLike = state.videos.findIndex(({ id }) => id === payload.id)
      const videoToLike = state.videos[idxToLike]

      videoToLike.isFavorite = !videoToLike.isFavorite
    },
    remove(state, { payload }: PayloadAction<{ id: string }>) {
      const idxToRemove = state.videos.findIndex(({ id }) => id === payload.id)

      state.videos.splice(idxToRemove, 1)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addVideo.pending, state => {
        state.pending = true
      })
      .addCase(addVideo.fulfilled, (state, { payload }) => {
        state.pending = false
        state.error = null

        state.videos.push(...payload)
      })
      .addCase(addVideo.rejected, (state, { error }) => {
        state.pending = false

        const coveredErrors = [VideoError.BadId]

        if (!coveredErrors.includes(error.message as VideoError)) return

        state.error = error.message as VideoError
      })
  },
})

export { addVideo }

export const { clearAll, switchLike, remove } = slice.actions

export const reducer = persistReducer(
  {
    key: 'videos',
    storage,
    whitelist: ['videos'],
  },
  slice.reducer
)
