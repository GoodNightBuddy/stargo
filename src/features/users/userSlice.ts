import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { fetchIdList, fetchUsers } from './userFetch';

export interface User {
  age: number;
  country: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string
}

export interface UserState {
  users: User[];
  isLoading: boolean;
}

const initialState: UserState = {
  users: [],
  isLoading: false
};

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const users: User[] = [];

    const response = await fetchIdList();
    const results = await fetchUsers(response.data);

    results.forEach(promise => {
      if(promise.status === 'fulfilled') {
        if(promise.value.status === 'success') {
          users.push(promise.value.data)
        }
      }
    })

    console.log(users)

    return users
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});


export const selectILoading = (state: RootState) => state.users.isLoading;
export const selectUsers = (state: RootState) => state.users.users;


export default userSlice.reducer;
