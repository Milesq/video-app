import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export type Theme = 'light' | 'dark'

export interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = {
  theme: 'light',
}

export const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, { payload }: PayloadAction<Theme>) {
      state.theme = payload
    },
  },
})

export const { changeTheme } = slice.actions

export const reducer = persistReducer(
  {
    key: 'theme',
    storage,
  },
  slice.reducer
)
