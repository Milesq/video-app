import { createSlice } from '@reduxjs/toolkit'

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

export const {
  reducer,
  actions: {},
} = slice
