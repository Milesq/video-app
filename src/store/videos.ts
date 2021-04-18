import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface Video {
  title: string
  src: string
  tileSrc: string

  views?: number
  likes: number
  uploadDate: Date
}

export interface VideosState {
  videos: Video[]
}

const initialState: VideosState = {
  videos: [],
}

export const slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
})

export const reducer = persistReducer(
  {
    key: 'videos',
    storage,
  },
  slice.reducer
)
