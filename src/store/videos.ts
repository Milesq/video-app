import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { VideoError } from '../errors'
import { Video } from '../interfaces'
import { resolve } from '../video-resolvers'

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

const addVideo = createAsyncThunk(
  'videos/addVideo',
  (url: string | string[]) => {
    const idsArray = typeof url === 'string' ? [url] : url

    return Promise.all(idsArray.map(resolve))
  }
)

export const slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    clearAll(state) {
      state.videos = []
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

export const { clearAll } = slice.actions

export const reducer = persistReducer(
  {
    key: 'videos',
    storage,
    whitelist: ['videos'],
  },
  slice.reducer
)
