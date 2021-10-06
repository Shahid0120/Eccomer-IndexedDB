import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counterexample/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
