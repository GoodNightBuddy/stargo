import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchIdList, fetchUsers } from './helpers/userFetch';
import { IUser, IUserState } from './types';


const initialState: IUserState = {
  users: [],
  isLoading: false
};


export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const users: IUser[] = [];

    const response = await fetchIdList();
    const results = await fetchUsers(response.data);

    results.forEach(promise => {
      if(promise.status === 'fulfilled') {
        if(promise.value.status === 'success') {
          users.push(promise.value.data)
        }
      }
    })

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
