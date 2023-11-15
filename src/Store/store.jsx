import { configureStore } from '@reduxjs/toolkit'
import { AuthApi } from '../Api/AuthApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
})

