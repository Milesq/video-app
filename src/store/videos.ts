import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { Video } from '../interfaces'

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
