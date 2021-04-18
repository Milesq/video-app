import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
} from 'react-redux'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import * as theme from './theme'
import * as videoDisplayer from './videoDisplayer'
import * as videos from './videos'

export const getStore = () =>
  configureStore({
    reducer: {
      theme: theme.reducer,
      videoDisplayer: videoDisplayer.reducer,
      videos: videos.reducer,
    },
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })

type AppStore = ReturnType<typeof getStore>

export type RootState = ReturnType<AppStore['getState']>

export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector

export { theme, videoDisplayer, videos }

export default () => {
  const storeInstance = getStore()
  const persistor = persistStore(storeInstance)
  return { storeInstance, persistor }
}
