import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

const {
  reducer,
  actions: { changeTheme },
} = slice
export { reducer, changeTheme }
