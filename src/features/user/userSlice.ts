import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface User {
  displayName: string;
  photoUrl: string;
}

export const userSlice = createSlice({
  name: 'user',
  initialState:{
  user: {uid:'', photoUrl:'',displayName:''}
  },
  reducers: {
    updateUserInfo: (state, action: PayloadAction<User>) => {
      console.log(action.payload)
    },
  },
});

export const { updateUserInfo } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
