import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserState } from '../../../models/user.models';

const initialState: IUserState = {
  user: {
    name: "test user",
    id: "user-id",
    email: "example@gmail.com"
  }
}

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    editName(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user.name = action.payload;
      }
    },
  }
})

const UserReducer = UserSlice.reducer;
export { UserReducer }