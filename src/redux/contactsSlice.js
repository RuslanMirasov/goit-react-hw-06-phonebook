import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.unshift({ ...action.payload });
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
