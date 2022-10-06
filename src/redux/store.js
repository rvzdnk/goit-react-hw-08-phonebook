import { configureStore } from '@reduxjs/toolkit';
import { api } from 'services/api';

import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    filtet: filterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

