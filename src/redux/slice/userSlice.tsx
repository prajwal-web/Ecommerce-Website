import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@reduxjs/toolkit/query';
import users from "../../utils/users.json"

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  age: number;
}

type TInitialState = {
  original: IUser[];
};

const initialState: TInitialState = {
  original: users,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showPaginatedData: (state, action: PayloadAction<TPaginationIndex>) => {
      return state.original.slice(1, 40)
    }
  },
});
export const { showPaginatedData } = userSlice.actions;
export const selectUser = (state: RootState) => state.counter.value;
export default userSlice;