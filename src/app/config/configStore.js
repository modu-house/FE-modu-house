import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import posts from '../modules/postSlice';

const rootReducer = {
  posts,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;