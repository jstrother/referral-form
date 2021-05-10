import { configureStore } from '@reduxjs/toolkit';
import guardianReducer from '../features/guardianSlice';

export default configureStore({
  reducer: {
    hasGuardian: guardianReducer,
  },
});