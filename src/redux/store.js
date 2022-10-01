import { configureStore } from '@reduxjs/toolkit';

import contacts from './contactsSlice';
import filter from './filterSlice';

const rootReducer = {
  contacts,
  filter,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;