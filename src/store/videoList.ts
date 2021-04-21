import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'

export interface VideoListState {
  currentPage: number
  pageCount: number
}

const initialState: VideoListState = {
  currentPage: 1,
  pageCount: 0,
}

export const slice = createSlice({
  name: 'videoList',
  initialState,
  reducers: {
    setPageCount(state, { payload }: PayloadAction<number>) {
      state.pageCount = payload
    },
    nextPage(state) {
      state.currentPage++
    },
    prevPage(state) {
      state.currentPage--
    },
    setCurrentPage(state, { payload }: PayloadAction<number>) {
      state.currentPage = payload
    },
  },
})

export const {
  nextPage,
  prevPage,
  setCurrentPage,
  setPageCount,
} = slice.actions

export const reducer = persistReducer(
  {
    key: 'videoList',
    storage: sessionStorage,
  },
  slice.reducer
)
