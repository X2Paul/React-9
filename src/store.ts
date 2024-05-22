import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
