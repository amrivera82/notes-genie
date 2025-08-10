// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
// src/features/counter/counterSlice.js
import counterReducer from './components/xSlice'; // Example slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other slices here
  },
});