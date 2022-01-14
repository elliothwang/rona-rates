import { configureStore } from '@reduxjs/toolkit';
import casesReducer from './features/casesSlice';

export default configureStore({
  reducer: {
    casesShown: casesReducer,
  },
});
