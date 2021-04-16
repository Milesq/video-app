import { configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
} from 'react-redux'

import * as theme from './theme'

const getStore = () =>
  configureStore({
    reducer: {
      theme: theme.reducer,
    },
  })

type AppStore = ReturnType<typeof getStore>

export type RootState = ReturnType<AppStore['getState']>

export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector

export { theme }

export default getStore
