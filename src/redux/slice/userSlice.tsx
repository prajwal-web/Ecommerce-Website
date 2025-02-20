import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import users from '../../utils/users.json';
import { RootState } from '../../hooks/store';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  age: number;
  gender?: string;
  companies?: string;
  jobTitle?: string;
}

type TInitialState = {
  original: IUser[];
  filteredUsers: IUser[];
  searchQuery: string;
};

const initialState: TInitialState = {
  original: users,
  filteredUsers: users,
  searchQuery: ''
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
      } else {
        state.filteredUsers = state.original.filter((user) => {
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
          return fullName.includes(query);
        });
      }
    },
    actionUsers: (state, action) => {
      const { ageFrom, ageTo, emailEnding, gender, companies, jobTitles } = action.payload;
      state.filteredUsers = state.original.filter((user) => {
        const validAge = user.age >= ageFrom && user.age <= ageTo;
        const validemailEnding = emailEnding ? user.email.includes(emailEnding) : true;
        const validGender = gender === 'All' || user.gender === gender;
        const validcompanies = companies === 'All' || user.companies === companies;
        const validJobTitles = jobTitles === 'All' || user.jobTitle === jobTitles;
        return validAge && validemailEnding && validGender && validcompanies && validJobTitles;
      });
    }
  }
});

export const { searchUsers, actionUsers } = userSlice.actions;
export const selectFilteredUsers = (state: RootState) => state.user.filteredUsers;
export default userSlice.reducer;
