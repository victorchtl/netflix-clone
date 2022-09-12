import { configureStore } from '@reduxjs/toolkit';
import likeSlice from './features/likeSlice.js';
import addToWatchSlice from './features/addToWatchSlice.js';
import notificationsSlice from './features/notificationsSlice.js';

export default configureStore({
  reducer: {
    like: likeSlice,
    addToWatch: addToWatchSlice,
    notifications: notificationsSlice
  }
})