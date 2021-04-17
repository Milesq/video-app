import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Order } from '../utils'

/* eslint-disable no-unused-vars */
export enum DiplayMode {
  List,
  Tiles,
}

export enum SortKey {
  Date = 'date',
  Likes = 'like',
  Views = 'view',
}

/* eslint-enable */

export interface SortBy {
  key: SortKey | null
  order?: Order
}

export interface Filters {
  favorite: boolean | null
}

export interface DisplayerState {
  mode: DiplayMode
  filterBy: Filters
  sortBy: Required<SortBy>
}

const initialState: DisplayerState = {
  mode: DiplayMode.Tiles,
  filterBy: {
    favorite: null,
  },
  sortBy: {
    key: null,
    order: Order.Desc,
  },
}

export const slice = createSlice({
  name: 'videoDisplayer',
  initialState,
  reducers: {
    changeDisplayMode(state, { payload }: PayloadAction<DiplayMode>) {
      state.mode = payload
    },
    setSortKey(state, { payload }: PayloadAction<SortBy>) {
      state.sortBy = {
        ...state.sortBy,
        ...payload,
      }
    },
    setFilter(state, { payload }: PayloadAction<Partial<Filters>>) {
      state.filterBy = {
        ...state.filterBy,
        ...payload,
      }
    },
  },
})

export const {
  reducer,
  actions: { changeDisplayMode },
} = slice
