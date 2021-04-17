import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/* eslint-disable no-unused-vars */
export enum DiplayMode {
  List,
  Tiles,
}
/* eslint-enable */

export interface DisplayerState {
  mode: DiplayMode
}

const initialState: DisplayerState = {
  mode: DiplayMode.List,
}

export const slice = createSlice({
  name: 'videoDisplayer',
  initialState,
  reducers: {
    changeDisplayMode(state, { payload }: PayloadAction<DiplayMode>) {
      state.mode = payload
    },
  },
})

export const {
  reducer,
  actions: { changeDisplayMode },
} = slice
