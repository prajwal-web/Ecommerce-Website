import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import users from '../../utils/users.json';

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
  filteredUsers: IUser[];
  searchQuery: string;
};

const initialState: TInitialState = {
  original: users,
  filteredUsers: users,
  searchQuery: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    searchUsers: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase().trim(); 
      state.searchQuery = action.payload;
  
      if (query === '') {
        state.filteredUsers = state.original; 
        console.log("hello")
      } else {
        state.filteredUsers = state.original.filter((user) => {
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
          return fullName.includes(query); 
        });
      }
    }
  }
  
});

export const { searchUsers } = userSlice.actions;
export const selectFilteredUsers = (state: RootState) => state.user.filteredUsers;
export default userSlice.reducer;
