import { configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
} from 'react-redux'

import * as theme from './theme'

const store = configureStore({
  reducer: {
    theme: theme.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector

export { theme }

export default store
