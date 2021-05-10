import { createSlice } from '@reduxjs/toolkit';

export const guardianSlice = createSlice({
  name: 'guardian',
  initialState: {
    hasGuardian: 'no',
  },
  reducers: {
    setGuardianInfo: (state, action) => {
      state.hasGuardian = action.payload;
    },
  },
});

export const { setGuardianInfo } = guardianSlice.actions;

export default guardianSlice.reducer;
