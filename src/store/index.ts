import { configureStore } from '@reduxjs/toolkit'

import * as theme from './theme'

const store = configureStore({
  reducer: {
    theme: theme.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export { theme }

export default store
