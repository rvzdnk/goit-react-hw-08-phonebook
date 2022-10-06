import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.error('Load error: ', error.message);
  }
};

const initialState = {
  items: loadFromLocalStorage('LOCALSTORAGE_KEY'),
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;