import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { Video } from '../interfaces'
import { resolve } from '../video-resolvers'

export interface VideosState {
  videos: Video[]
}

const initialState: VideosState = {
  videos: [],
}

const addVideo = createAsyncThunk('videos/addVideo', async (url: string) => {
  return await resolve(url)
})

export const slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addVideo.fulfilled, (state, { payload }) => {
      state.videos.push(payload)
    })
  },
})

export const reducer = persistReducer(
  {
    key: 'videos',
    storage,
  },
  slice.reducer
)
